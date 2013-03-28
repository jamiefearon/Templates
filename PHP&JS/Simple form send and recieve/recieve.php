<?php

if ($_POST["fname"] || $_POST["age"]) {
	echo "<h1>POST Response</h1><br>";
	echo "Welcome " . $_POST["fname"] . "<br>";
	echo "You are " . $_POST["age"] . "years old.";
}

if ($_GET["fname"] || $_GET["age"]) {
	echo "<h1>GET Response</h1><br>";
	echo "Welcome " . $_GET["fname"] . "<br>";
	echo "You are " . $_GET["age"] . "years old.";
}


?>