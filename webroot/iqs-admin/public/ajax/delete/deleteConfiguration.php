<?php require "../../../app/init.php";
/*
$Auth = new Auth();
if(!$Auth->is_logged_in())
{
	$Auth->not_logged_in();	
}*/

$confSection = trim($_POST["confSection"]);
$confElement = trim($_POST["confElement"]);

if(!$confElement)
{
	die();
}


$Iqs = new Iqs;
$Iqs->deleteConfElementValue($confSection, $confElement);



Cache::set("getConfSectionValues_".$confSection, $Iqs->getConfSectionValues($confSection));

?>