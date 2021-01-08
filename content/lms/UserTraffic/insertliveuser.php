<?php
    //
    $username=$_POST['username'];
   // $username="ramu";
    $xml = simplexml_load_file("liveuser.xml");
    $message =$xml->addChild('user');
    $message->addChild('username',$username);
    file_put_contents("liveuser.xml",$xml->saveXML());

?>