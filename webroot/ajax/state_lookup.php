<?php 

	$zipcode = $_GET["zipcode"];
	$quoteID = $_GET["quoteID"];
	
	if($zipcode)
	{
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
		curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)");
		curl_setopt($ch, CURLOPT_URL, "https://maps.googleapis.com/maps/api/geocode/json?address=".$zipcode."&region=US&components=country:US");
		curl_setopt($ch, CURLOPT_HEADER, 0);
		$data = curl_exec($ch);
		curl_close($ch);
		
		$data = json_decode($data, true);
		
		$address_components = $data["results"][0]["address_components"];
		
		$statePrefix = false;
		foreach($address_components as $addressData)
		{		
			if($addressData["types"][0] == "administrative_area_level_1")
			{
				$statePrefix = $addressData["short_name"];
			}
		}
		
		$path = '../products';
		$directories = array();
		foreach (new DirectoryIterator($path) as $file)
		{
			if($file->isDot()) continue;
		
				if($file->isDir())
				{
					$dirName = $file->getFilename();
					array_push($directories, $dirName);
				}
		}
		
		if(in_array($statePrefix, $directories))
		{
			$redirectTo = "products/".$statePrefix."/recallquote.html?zipcode=".$zipcode."&quoteID=".$quoteID;
		}
		else
		{
			$formatted_address = $data["results"][0]["formatted_address"];
			$redirectTo = "unsupported.php?info=".base64_encode($formatted_address);
		}
		
		echo $redirectTo;
		
	}
?>