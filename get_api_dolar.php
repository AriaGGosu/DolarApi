<?php

	$yyyy = $_GET['yyyy'];
	$mm = $_GET['mm'];
	$dd = $_GET['dd'];
	$apiKey = "9c84db4d447c80c74961a72245371245cb7ac15f";
	$format = "json";

	$url = "https://api.sbif.cl/api-sbifv3/recursos_api/dolar/posteriores/$yyyy/$mm/dias/$dd?apikey=$apiKey&formato=$format&callback=potato";

	$response = file_get_contents($url);

	// echo $response;
	echo $response;
?>
