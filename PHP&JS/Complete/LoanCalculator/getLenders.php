<?php

if( $_GET["amount"] || $_GET["apr"] || $_GET["years"] || $_GET["zipcode"] ) {
	$data = array(
   	 array('name' => 'foo', 'url' => 'url'),
   	 array('name' => 'bar', 'url' => 'url2'),
	);
	echo json_encode($data);
}

?>