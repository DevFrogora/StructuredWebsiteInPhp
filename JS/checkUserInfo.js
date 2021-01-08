$(document).ready(function () {
    let myip = "";
    function CheckUserInfo() {
        $.ajax({
            type: "POST",
            url: "./JS/xml/login.xml",
            dataType: "xml",
            success: function (xml) {
                let cusername=getCookie("username"); // get cookie name
                get_ip();
                let noOfVisitor = $(xml).find("user").length;
                $(".visit").html(`Views: ${noOfVisitor}`);
                $(xml).find('user').each(function () {
                    if ($(this).find('username').text() === cusername) {
                        if ($(this).find('IP').text() === myip) {
                         //   document.write("sameip<br>");
                        } else {
                          //  document.write("updated");
                            //here i have to update the ip
                            //https://my.justhost.com/hosting/help/htaccess#deny-ip
                            update_IP(cusername,myip);
                        }
                    }

                });


            }


        });
    }

    function update_IP(username,IP) {
        someData = {
            "username":username,
            "IP": IP,

        };

        $.ajax({
            
            url: './api/xml/UpdateApiInXMLlogin.php',
            type: 'POST',
            data: someData,
            success: function (msg) {
                // alert('message Sent');
            }
        });
    }

    function get_ip() {
        $.getJSON("https://api.ipify.org?format=json",
            function(data) {

                // Setting text of element P with id gfg 
                // $("#lol").html(data.ip);
                myip=insideajax(data.ip);
               // $("#lol").text(myip);
            })
    }
    //get_ip();
    function insideajax(ip){

      //  console.log("updated Info ",ip);
        return ip;

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


    setInterval(function() {

        CheckUserInfo();

    }, 2000);
});