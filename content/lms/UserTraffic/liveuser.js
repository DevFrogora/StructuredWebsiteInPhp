$(document).ready(function () {
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

let global_Username=getCookie("username");
    $(window).unload(function () {
        

        deleteUser(global_Username);
    });


    function deleteUser(username) {
        someData = {
            "username": username,
        };

        $.ajax({

            url: './content/lms/UserTraffic/deleteuser.php',
            type: 'POST',
            data: someData,
            success: function (msg) {
                // alert('message Sent');
            }
        });
    }

    function liveuser() {
        $.ajax({
            success: function () {
              
                let lcusername=getCookie("username")
                if(lcusername === ""){
                    deleteUser(global_Username);
                    window.location.href = "https://media.discordapp.net/attachments/737877754929872967/738762685415424040/lol.png";
                  
                }else{
                    checkUserAvail(lcusername);
                }
                
                //  $("#div1").html("lol");
            }
        });

    }

    function checkUserAvail(cname) {
        $.ajax({
            type: "POST",
            url: "./content/lms/UserTraffic/liveuser.xml",
            dataType: "xml",
            success: function (xml) {

                let noOfUser = $(xml).find("user").length;
               // console.log(noOfUser);
                $(".watching").html(` &nbsp;&nbsp; Watching : &nbsp; ${noOfUser - 1 } &nbsp; <span class="live" style="color:red;text-align:center;">( Live ) </span> &nbsp;&nbsp;  `);
                //set no of user watching
                let status = ""; let userlist="";
                $(xml).find('user').each(function () {
                    userlist = userlist +"<span class='liveUserImg'><img src='https://media.discordapp.net/attachments/737877754929872967/739382856861745242/unknown.png?width=30&height=30'> &nbsp;"+ $(this).find("username").text() +"</span> ";
                    if ($(this).find("username").text() === cname) {
                        status = "available"
                       // console.log("available", cname);
                    }

                });
                userlist=userlist.substr(158);
                $(".userlist").html(`<br> ${userlist}`);
                if (status === "available") {

                } else {
                    //  insert it
                    insert_user(cname);
                }


            }


        });

    }

    function insert_user(cusername) {
        someData = {
            "username": cusername,
        };

        $.ajax({

            url: './content/lms/UserTraffic/insertliveuser.php',
            type: 'POST',
            data: someData,
            success: function (msg) {
                // alert('message Sent');
               // console.log("inserted", cusername);
            }
        });
    }

    setInterval(function () {
        liveuser();


    }, 2000);
});