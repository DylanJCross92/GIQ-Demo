<?php require "../../../app/init.php";

$Auth = new Auth();
if(!$Auth->is_logged_in())
{
	$Auth->not_logged_in();	
}

$confSection = $_POST["conf_section"];
$confElement = trim($_POST["confElement"]);
$confValue = trim($_POST["confValue"]);

if(!$confElement || !$confValue)
{
	die();	
}

$addConfigArray = array(
    array($confSection,$confElement,$confValue)
);

$Iqs = new Iqs;


$Iqs->updateConfElementValue($confSection, $confElement, $confValue);
Cache::set("getConfSectionValues_".$confSection, $Iqs->getConfSectionValues($confSection));


?>
