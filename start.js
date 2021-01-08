$(document).ready(function () {
    let NewIP = "newIP";
    var head = document.getElementsByTagName('head')[0];
    var js = document.createElement("script");

    js.type = "module";
    var username = getCookie("username");
    if (username != "") {
        console.log(username);
        js.src = "main.js";


    }
    else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 60);

            get_ip();
            someData = {
                "username": username,
                "IP": NewIP,
    
            };
    
            $.ajax({
    
                url: './api/xml/insertApiInXMLlogin.php',
                type: 'POST',
                data: someData,
                success: function (msg) {
                    // alert('message Sent');
                }
            });
            js.src = "main.js";

        } else {
            window.location.href = "https://media.discordapp.net/attachments/737877754929872967/738762685415424040/lol.png";
        }

    }

    head.appendChild(js);


    function get_ip() {
        $.getJSON("https://api.ipify.org?format=json",
            function (data) {

                // Setting text of element P with id gfg 
                // $("#lol").html(data.ip);
                NewIP = insideajax(data.ip);
                // $("#lol").text(myip);
            })
    }
    //get_ip();
    function insideajax(ip) {

      //  console.log("updated Info ", ip);
        return ip;

    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

  function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";

    }

})
