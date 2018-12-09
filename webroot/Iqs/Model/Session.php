<?php
/**
 * SessionObject
 *
 * Holds all data about the active session
 *
 * @package SageSure\Iqs
 * @author  Scott D. Rackliff (scottr@owlsheadsolutions.com)
 * @since   1.0.0
 */

namespace Iqs\Model;
    use Iqs\Cnst\FieldKeys;
    use Iqs\Cnst\IncomingDataKeyArrays;
    use Iqs\Dao\IConfigurationDataAccessor;
    use Iqs\Dao\ConfigurationDataAccessor;

class Session {
    private $quoteId = "";
    private $sessionId = "";
    private $feid = "";
    private $debug = false;
    private $altData = "";
    private $pageId = "";
    private $quoteAddressArray = array();
    private $quoteFields = array();
    private $storageField = "";

    //TODO: put a limit on the number of storage fields and quote fields

    public function __construct($productData, IConfigurationDataAccessor $configData)
    {
        $this->populateNewSession($productData, $configData);
    }

    private function populateNewSession($productData, IConfigurationDataAccessor $configData){
        $feid = $productData[FieldKeys::$PRODUCT_FEID];

        $this->sessionId = uniqid($feid,true);

        if(isset($productData[FieldKeys::$PRODUCT_ALTDATA])){
            $this->altData = $productData[FieldKeys::$PRODUCT_ALTDATA];
        }

        if(isset($productData[FieldKeys::$PRODUCT_PAGEID])){
            $this->pageId = $productData[FieldKeys::$PRODUCT_PAGEID];
        }

        //TODO: change this to an isset?
        if(array_key_exists(FieldKeys::$PRODUCT_DEBUG,$productData)){
            $tmpDebug = strtolower($productData[FieldKeys::$PRODUCT_DEBUG]);
            if($tmpDebug==="true"){
                $this->debug=true;
                $feid = $feid.FieldKeys::$DEBUG_MODE_QUOTE_RECORD_FEID_IDENTIFIER;
            }
            elseif($tmpDebug==="false"){
                $this->debug=false;
            }
        }

        $this->feid = $feid;

        $credentialsData = $configData->getConfigData(FieldKeys::$IQS_CONF_SECTION_EZQUOTEAPI);

		//add required fields
        if($this->debug === true)
		{
            $initialQuoteFields[FieldKeys::$UPDATE_QUOTE_SESSION_USER]=$credentialsData[FieldKeys::$IQS_CONF_ELEMENT_EZQUOTEAPI_DEBUG_APIUID];
            $initialQuoteFields[FieldKeys::$UPDATE_QUOTE_SESSION_AGENCY_LOCATION_CODE]=$credentialsData[FieldKeys::$IQS_CONF_ELEMENT_EZQUOTEAPI_DEBUG_APIALC];
        }
		else
		{
            $initialQuoteFields[FieldKeys::$UPDATE_QUOTE_SESSION_USER]=$credentialsData[FieldKeys::$IQS_CONF_ELEMENT_EZQUOTEAPI_APIUID];
            $initialQuoteFields[FieldKeys::$UPDATE_QUOTE_SESSION_AGENCY_LOCATION_CODE]=$credentialsData[FieldKeys::$IQS_CONF_ELEMENT_EZQUOTEAPI_APIALC];
        }

        $this->updateQuoteFields($initialQuoteFields);

    }

    /**
     * @param string $pageId
     */
    public function setPageId($pageId)
    {
        $this->pageId = $pageId;
    }

    /**
     * @return string
     */
    public function getPageId()
    {
        return $this->pageId;
    }

    /**
     * @param string $altDat
     */
    public function setAltData($altData)
    {
        $this->altData = $altData;
    }

    /**
     * @return string
     */
    public function getAltData()
    {
        return $this->altData;
    }

    /**
     * @param string $feid
     */
    public function setFeid($feid)
    {
        $this->feid = $feid;
    }

    /**
     * @return string
     */
    public function getFeid()
    {
        return $this->feid;
    }

    /**
     * @return string - state as lowercase
     */
    public function getState()
    {
        $rawfeid = $this->getFeid();
        $isSpecial = strpos($rawfeid, ".");
        if($isSpecial){
            $rawfeid = substr($rawfeid, 0, strpos($rawfeid, "."));
        }
        $geostate = strtolower(substr($rawfeid, -2));
        return $geostate;
    }

    public function getZipCode()
    {

        $zipCode = $this->quoteFields[FieldKeys::$VALIDATE_ADDRESS_PROPERTY_ZIP_CODE];

        return $zipCode;
    }

    public function getProductId(){
        return strtoupper($this->getState()."_".$this->quoteFields[FieldKeys::$BEGIN_QUOTE_SESSION_INSURANCE_PRODUCT]);
    }

    public function getDebug(){
        return $this->debug;
    }

    /**
     * @return array
     */
    public function getQuoteFields($requestedBaseFieldKeys = array())
    {
        $result = array();
        if(count($requestedBaseFieldKeys)>0){
            foreach($requestedBaseFieldKeys as $key){
                if(isset($this->quoteFields[$key])){
                    $result[$key] = $this->quoteFields[$key];
                }
            }
        }else{
            $result = $this->quoteFields;
        }

        $decryptedQuoteFields = $this->decryptSensitiveItems($result);

        return $decryptedQuoteFields;
    }

    /**
     * @return string
     */
    public function getSessionId()
    {
        return $this->sessionId;
    }

    /**
     * @param string $sessionId
     */
    public function setSessionId($sessionId)
    {
        $this->sessionId = $sessionId;
    }

    public function setQuoteAddressArray(array $quoteAddressArray){
        $this->quoteAddressArray = $quoteAddressArray;
    }

    public function getQuoteAddressArray(){
        return $this->quoteAddressArray;
    }

    public function updateQuoteFields(array $newQuoteFields){

        $newQuoteFields = $this->filterInvalidQuoteItems($newQuoteFields);
        $quoteFieldsWithEncryptionItems = $this->encryptSensitiveItems($newQuoteFields);

        $this->quoteFields = array_merge($this->quoteFields, $quoteFieldsWithEncryptionItems);
    }

    public function getQuoteId(){
        return $this->quoteId;
    }

    public function setQuoteId($quoteId){
        $this->quoteId = $quoteId;
    }

    /**
     * @return array
     */
    public function getStorageField()
    {
        $decryptedStorageFields = $this->decryptString($this->storageField);
        return $decryptedStorageFields;
    }

    public function updateStorageField($newStorageField){
        $this->storageField = $this->encryptString($newStorageField);
    }

    public function selectQuoteAddress($addressId){

        $selectedQuote = $this->quoteAddressArray[$addressId];

        //EZQ should already have this data, we don't need to save it (it breaks EZQ to send it again)
        $this->updateQuoteFields($selectedQuote->getInfoFields());
        $this->updateQuoteFields($selectedQuote->getPropertyAddressArray());

    }

    public function getQuoteFieldsAsJson(){
        $quoteFieldsToDecrypt = $this->quoteFields;

        $decryptedQuoteFields = $this->decryptSensitiveItems($quoteFieldsToDecrypt);

        return json_encode($decryptedQuoteFields);
    }


    public function getHomeFeaturesRequestDataAsJson(){
        $homeFeatureRequestFields = array();

        $homeFeatureRequestFields[FieldKeys::$BEGIN_QUOTE_SESSION_PRODUCT_ID_CAP] = $this->getProductId();

        if(array_key_exists (FieldKeys::$UPDATE_QUOTE_SESSION_ROOF_GEOMETRY_TYPE, $this->quoteFields)){
            $homeFeatureRequestFields[FieldKeys::$UPDATE_QUOTE_SESSION_ROOF_GEOMETRY_TYPE] =
                $this->quoteFields[FieldKeys::$UPDATE_QUOTE_SESSION_ROOF_GEOMETRY_TYPE];
        }

        if(array_key_exists (FieldKeys::$UPDATE_QUOTE_SESSION_GARAGE_TYPE, $this->quoteFields)) {
            $homeFeatureRequestFields[FieldKeys::$UPDATE_QUOTE_SESSION_GARAGE_TYPE] =
                $this->quoteFields[FieldKeys::$UPDATE_QUOTE_SESSION_GARAGE_TYPE];
        }

        if(array_key_exists (FieldKeys::$UPDATE_QUOTE_SESSION_SQUARE_FOOT_UNDER_ROOF_FLA, $this->quoteFields)) {
            $homeFeatureRequestFields[FieldKeys::$UPDATE_QUOTE_SESSION_SQUARE_FOOT_UNDER_ROOF_FLA] = $this->quoteFields[FieldKeys::$UPDATE_QUOTE_SESSION_SQUARE_FOOT_UNDER_ROOF_FLA];
        }

        if(array_key_exists (FieldKeys::$UPDATE_QUOTE_SESSION_SQUARE_FOOT_UNDER_ROOF_GARAGE, $this->quoteFields)) {
            $homeFeatureRequestFields[FieldKeys::$UPDATE_QUOTE_SESSION_SQUARE_FOOT_UNDER_ROOF_GARAGE] = $this->quoteFields[FieldKeys::$UPDATE_QUOTE_SESSION_SQUARE_FOOT_UNDER_ROOF_GARAGE];
        }

        return json_encode($homeFeatureRequestFields);
    }

    private function encryptSensitiveItems(array $keyValuePairs){
        //look and see if a quote field is on the encrypt list
        $keysRequiringEncryption = IncomingDataKeyArrays::getEncryptionItemArrayKeys();

        foreach($keysRequiringEncryption as $key){
            if(array_key_exists($key,$keyValuePairs)){
                $keyValuePairs[$key] = $this->encryptString($keyValuePairs[$key]);
            }
        }
        return $keyValuePairs;
    }

   private function encryptString($unencryptedString){
        $configData = new ConfigurationDataAccessor();
        $encConfigData = $configData->getConfigData("enc");
        $secretKey = $encConfigData[FieldKeys::$IQS_CONF_ELEMENT_ENC_KEY];
        $method = 'aes-128-cbc';
        $iv = $this->getRandomString();
       $encryptedString = openssl_encrypt($unencryptedString, $method, $secretKey, 0, $iv).":".$iv;
       return $encryptedString;
   }

    private function filterInvalidQuoteItems(array $keyValuePairs){
        $invalidKeys = IncomingDataKeyArrays::getInvalidQuoteDataKeys();

        foreach($invalidKeys as $invalidKey){
            if(array_key_exists($invalidKey,$keyValuePairs)){
                unset($keyValuePairs[$invalidKey]);
            }
        }

        return $keyValuePairs;
    }

    private function decryptSensitiveItems(array $keyValuePairs){
        $keysRequiringEncryption = IncomingDataKeyArrays::getEncryptionItemArrayKeys();


        foreach($keysRequiringEncryption as $key){
            if(array_key_exists($key,$keyValuePairs)){
                $keyValuePairs[$key] = $this->decryptString($keyValuePairs[$key]);
            }
        }
        return $keyValuePairs;
    }

    private function decryptString($encryptedString){
        $configData = new ConfigurationDataAccessor();
        $encConfigData = $configData->getConfigData("enc");
        $secretKey = $encConfigData[FieldKeys::$IQS_CONF_ELEMENT_ENC_KEY];
        $legacyKey = $encConfigData[FieldKeys::$IQS_CONF_ELEMENT_ENC_LEGACY_KEY];
        $decryptedString = "";
        $method = 'aes-128-cbc';
        if(strlen($encryptedString) > 0) {
            //encrypted strings with a ":" in them are the new format and don't need to use the legacy key
            if (strpos($encryptedString, ':') !== false) {
                $encStringParts = explode(':', $encryptedString);
                $decryptedString = openssl_decrypt($encStringParts[0], $method, $secretKey, 0, $encStringParts[1]);
            } else {
                $decryptedString = trim(mcrypt_decrypt(MCRYPT_RIJNDAEL_256, $legacyKey, base64_decode($encryptedString), MCRYPT_MODE_ECB));
            }
        }
        return $decryptedString;
    }

    function getRandomString($length = 16) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $string = '';
        for ($i = 0; $i < $length; $i++) {
            $string .= $characters[mt_rand(0, strlen($characters) - 1)];
        }
        return $string;
    }


} 