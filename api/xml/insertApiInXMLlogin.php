<?php

    $username=$_POST['username'];
    $IP=$_POST['IP'];
    $xml = simplexml_load_file("../../JS/xml/login.xml");
    $message =$xml->addChild('user');
    $message->addChild('username',$username);
    $message->addChild('IP',$IP);
    file_put_contents("../../JS/xml/login.xml",$xml->saveXML());


?>