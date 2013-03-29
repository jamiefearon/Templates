<?php

if( $_GET["name1"] || $_GET["name2"] ) {
	$data = array(
   	 array('name' => $_GET["name1"], 'reply' => 'hello'),
   	 array('name' => $_GET["name2"], 'reply' => 'bye'),
	);
	echo json_encode($data);
}

?>