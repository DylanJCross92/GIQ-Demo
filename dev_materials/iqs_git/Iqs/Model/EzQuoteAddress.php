<?php
/**
 * QuoteAddress
 *
 * The address to be validated for the quote
 *
 * @package SageSure\Iqs
 * @author  Scott D. Rackliff (scottr@owlsheadsolutions.com)
 * @since   1.0.0
 */

namespace Iqs\Model;

use Iqs\Cnst\FieldKeys;

class EzQuoteAddress extends  AQuoteAddress
{
    public $SquareFootUnderRoofRetrieved = "";
    public $ConstructionYearRetrieved = "";
    public $NumberOfFullBathsRetrieved = "";
    public $NumberOfHalfBathsRetrieved = "";
    public $NumberOfFireplacesRetrieved = "";
    public $PropertyCounty = "";

    /**
     * @param array $decodedJsonAddress
     */
    public function populateAddress(array $decodedJsonAddress){

        $this->PropertyStreetNumber = $decodedJsonAddress[FieldKeys::$EZ_QUOTE_ADDRESS_BASIC_INFO][FieldKeys::$VALIDATE_ADDRESS_PROPERTY_STREET_NUMBER];
        $this->PropertyStreetName = $decodedJsonAddress[FieldKeys::$EZ_QUOTE_ADDRESS_BASIC_INFO][FieldKeys::$VALIDATE_ADDRESS_PROPERTY_STREET_NAME];
        $this->PropertyCity = $decodedJsonAddress[FieldKeys::$EZ_QUOTE_ADDRESS_BASIC_INFO][FieldKeys::$VALIDATE_ADDRESS_PROPERTY_CITY];
        $this->PropertyState = $decodedJsonAddress[FieldKeys::$EZ_QUOTE_ADDRESS_BASIC_INFO][FieldKeys::$VALIDATE_ADDRESS_PROPERTY_STATE];
        $this->PropertyZipCode = $decodedJsonAddress[FieldKeys::$EZ_QUOTE_ADDRESS_BASIC_INFO][FieldKeys::$VALIDATE_ADDRESS_PROPERTY_ZIP_CODE];


        $this->SquareFootUnderRoofRetrieved = $decodedJsonAddress[FieldKeys::$EZ_QUOTE_ADDRESS_FULL_INFO][FieldKeys::$ADDRESS_FULL_INFO_SQRFTUNDERROOFRETRIEVED];
        $this->ConstructionYearRetrieved = $decodedJsonAddress[FieldKeys::$EZ_QUOTE_ADDRESS_FULL_INFO][FieldKeys::$ADDRESS_FULL_INFO_CONSTRUCTYEARRETRIEVED];
        $this->NumberOfFireplacesRetrieved = array_key_exists(FieldKeys::$ADDRESS_FULL_INFO_NUMBEROFFIREPLACESRETRIEVED, $decodedJsonAddress[FieldKeys::$EZ_QUOTE_ADDRESS_FULL_INFO]) ? $decodedJsonAddress[FieldKeys::$EZ_QUOTE_ADDRESS_FULL_INFO][FieldKeys::$ADDRESS_FULL_INFO_NUMBEROFFIREPLACESRETRIEVED] : "";
        $this->NumberOfFullBathsRetrieved = $decodedJsonAddress[FieldKeys::$EZ_QUOTE_ADDRESS_FULL_INFO][FieldKeys::$ADDRESS_FULL_INFO_NUMBEROFFULLBATHSRETRIEVED];
        $this->NumberOfHalfBathsRetrieved = $decodedJsonAddress[FieldKeys::$EZ_QUOTE_ADDRESS_FULL_INFO][FieldKeys::$ADDRESS_FULL_INFO_NUMBEROFHALFBATHSRETRIEVED];
        $this->PropertyCounty = $decodedJsonAddress[FieldKeys::$EZ_QUOTE_ADDRESS_FULL_INFO][FieldKeys::$ADDRESS_FULL_INFO_PROPERTY_COUNTY];

    }
}