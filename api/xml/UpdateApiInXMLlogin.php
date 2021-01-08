<?php

$given_username=$_POST['username'];
$given_IP=$_POST['IP'];

 $xml=simplexml_load_file('../../JS/xml/login.xml');
 foreach($xml->children() as $user){

    $username=$user->username;
    if($username == $given_username){

        $user->IP= $given_IP;
    }
    
 }

 file_put_contents("../../JS/xml/login.xml",$xml->saveXML());


?>