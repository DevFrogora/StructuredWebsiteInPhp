<?php

$a=array("https://media.discordapp.net/attachments/736467143935262750/736467287216881775/59269bb894345115fd5576c3cd465d23.png",
        "https://media.discordapp.net/attachments/736467143935262750/736467289951698994/728978822787104770.png",
        "https://media.discordapp.net/attachments/736467143935262750/736467291776221284/731152409946226748.png",
        "https://media.discordapp.net/attachments/736467143935262750/736467293030318120/733230501652856834.png",
        "https://media.discordapp.net/attachments/736467143935262750/736467294976475156/735080297367994390.png");
    $content=$_POST['content'];
    $username=$_POST['username'];
    $xml = simplexml_load_file("../../JS/xml/Chat.xml");

    $message =$xml->addChild('message');
    $message->addChild('userid','2');
    $message->addChild('username',$username);
    $message->addChild('avatar',$a[array_rand($a,1)]);
    $message->addChild('content',$content);
    date_default_timezone_set('Asia/Kolkata');
    $message->addChild('timestamp', date("d/M/Y h:i:s A"));

    file_put_contents("../../JS/xml/Chat.xml",$xml->saveXML());





?>