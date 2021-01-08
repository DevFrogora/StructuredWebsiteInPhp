<?php

$xml=simplexml_load_file("liveuser.xml");
function deleteUser($username,$filename='liveuser.xml'){
    $data = simplexml_load_file($filename);
    $length =count($data->user);
    for($i=0;$i < $length ; $i++ ){
        if($data->user[$i]->username == $username){
            unset($data->user[$i]);
        break;
        }
    }
    file_put_contents("liveuser.xml",$data->saveXML());
}

deleteUser($_POST['username']);

?>