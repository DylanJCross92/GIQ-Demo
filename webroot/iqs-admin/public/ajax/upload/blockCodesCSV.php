<?php require "../../../app/init.php";

$Auth = new Auth();
if(!$Auth->is_logged_in())
{
	$Auth->not_logged_in();	
}

// Check if file was uploaded
if(!isset($_FILES["csv"])) {
	$response = array(
			"error" => true
		);
	
	$response["message"] = "No file uploaded";
    require ROOT."/app/views/parts/settings/blockcode.import.error.php";
	
	return false;	
}

// Check if file is a CSV file	
if(pathinfo($_FILES["csv"]["name"], PATHINFO_EXTENSION) != "csv") 
{
	$response = array(
			"error" => true
		);
	
	$response["message"] = "The uploaded file is not a CSV";
    require ROOT."/app/views/parts/settings/blockcode.import.error.php";
	
	return false;	
}

// Check if file has content
if ($_FILES["csv"]["size"] <= 0) {
	$response = array(
		"error" => true
	);
	$response["message"] = "The uploaded file is empty";

	require ROOT."/app/views/parts/settings/blockcode.import.error.php";
	
	return false;
}

// Get the CSV file
$file = $_FILES["csv"]["tmp_name"];
$handle = fopen($file,"r");

$data = array();
while($row = fgetcsv($handle)) {
   $data[] = $row;
}

if(count($data)<=0)
{
	$response = array(
		"error" => true
	);

	$response["message"] = "The uploaded file is empty";
    require ROOT."/app/views/parts/settings/blockcode.import.error.php";
	
	return false;	
}

$i = 0;
$valid = false;
$data_to_db = array();
foreach($data as $row) {
	
	$blockCode = strtolower(trim($row[0]));
	$blockText = strtolower(trim($row[1]));
	
	if($i == 0)
	{
		if($blockCode == "blockcode" && $blockText == "blocktext")
		{
			$valid = true;
		}
		else
		{
			$valid = false;	
		}
	}
	else if($valid)
	{
		$data_to_db[] = array($blockCode, $blockText); 
	}
	else
	{
		$response = array(
			"error" => true
		);
	
		$response["message"] = "There was an error with the format of the file";

        require ROOT."/app/views/parts/settings/blockcode.import.error.php";

        return false;
	}
	
	$i++;	
}

$Iqs = new Iqs;
if($_POST[update] == "update") {
    if (!$Iqs->bulkUpdateBlockCodesValues($data_to_db)) {
        $response = array(
            "error" => true
        );

        $response["message"] = "Failed to insert rows";

        require ROOT."/app/views/parts/settings/blockcode.import.error.php";

        return false;
    }
}else {
    if (!$Iqs->replaceBlockCodesValues($data_to_db)) {
        $response = array(
            "error" => true
        );

        $response["message"] = "Failed to insert rows";

        require ROOT."/app/views/parts/settings/blockcode.import.error.php";

        return false;
    }
}

$response = array(
		"error" => false
	);
	
	
$getBlockCodesValues = $Iqs->getBlockCodesValues();
Cache::set("getBlockCodesValues", $getBlockCodesValues);
$blockcodes = json_decode(json_encode($Iqs->getBlockCodesValues()));

 foreach($blockcodes as $blockCodesData):?> 
	<?php require ROOT."/app/views/parts/settings/blockcodes.table.row.php";?>
<?php endforeach;?>		