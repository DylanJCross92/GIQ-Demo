<?php
$config = array();

$config["site"] = array(
	"name" => "Insurance Quoting Service Admin",
	"site_root" => ROOT,
	"version" => "1.8.17_dev_20170703_135056",
	"landing_page" => "dashboard"
);

$config["templates"] = array(
	"default" => array(
		"header" => "header",
		"footer" => "footer"
	),
	
	"dashboard" => array(
		"page_title" => "Dashboard"
	),
	
	"settings" => array(
		"page_title" => "Settings",
		"landing_page" => "settings/zipcodes",
	),
	
	"settings/zipcodes" => array(
		"page_title" => "Zipcode Settings"
	),
	
	"settings/blockcodes" => array(
		"page_title" => "Blockcodes Settings"
	),
	
	"settings/configuration" => array(
		"page_title" => "Configuration Settings"
	),
	
	"products" => array(
		"page_title" => "Products"
	),
	

);

$config["full_states"] = array(
	'us'=>'United States',
	'al'=>'Alabama',
	'ak'=>'Alaska',
	'az'=>'Arizona',
	'ar'=>'Arkansas',
	'ca'=>'California',
	'co'=>'Colorado',
	'ct'=>'Connecticut',
	'de'=>'Delaware',
	'dc'=>'District of Columbia',
	'fl'=>'Florida',
	'ga'=>'Georgia',
	'hi'=>'Hawaii',
	'id'=>'Idaho',
	'il'=>'Illinois',
	'in'=>'Indiana',
	'ia'=>'Iowa',
	'ks'=>'Kansas',
	'ky'=>'Kentucky',
	'la'=>'Louisiana',
	'me'=>'Maine',
	'md'=>'Maryland',
	'ma'=>'Massachusetts',
	'mi'=>'Michigan',
	'mn'=>'Minnesota',
	'ms'=>'Mississippi',
	'mo'=>'Missouri',
	'mt'=>'Montana',
	'ne'=>'Nebraska',
	'nv'=>'Nevada',
	'nh'=>'New Hampshire',
	'nj'=>'New Jersey',
	'nm'=>'New Mexico',
	'ny'=>'New York',
	'nc'=>'North Carolina',
	'nd'=>'North Dakota',
	'oh'=>'Ohio',
	'ok'=>'Oklahoma',
	'or'=>'Oregon',
	'pa'=>'Pennsylvania',
	'ri'=>'Rhode Island',
	'sc'=>'South Carolina',
	'sd'=>'South Dakota',
	'tn'=>'Tennessee',
	'tx'=>'Texas',
	'ut'=>'Utah',
	'vt'=>'Vermont',
	'va'=>'Virginia',
	'wa'=>'Washington',
	'wv'=>'West Virginia',
	'wi'=>'Wisconsin',
	'wy'=>'Wyoming',
	'as'=>'American Samoa',
	'gu'=>'Guam',
	'mp'=>'Northern Mariana Islands',
	'pr'=>'Puerto Rico',
	'vi'=>'Virgin Islands',
	'um'=>'U.S. Minor Outlying Islands',
	'fm'=>'Federated States of Micronesia',
	'mh'=>'Marshall Islands',
	'pw'=>'Palau',
	'aa'=>'U.S. Armed Forces – Americas',
	'ae'=>'U.S. Armed Forces – Europe',
	'ap'=>'U.S. Armed Forces – Pacific',
	'cm'=>'Northern Mariana Islands',
	'cz'=>'Panama Canal Zone',
	'nb'=>'Nebraska',
	'pi'=>'Philippine Islands',
	'tt'=>'Trust Territory of the Pacific Islands'
);

?>