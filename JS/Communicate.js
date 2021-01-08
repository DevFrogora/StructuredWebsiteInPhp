
$(document).ready(function(){ 
    $('#chatsubmit').click(function() {
      
        let username= getCookie("username");
        let content=$("#textarea").val();
        if(username.length >  3  && content.length > 2 && username.length  < 15  && content.length  < 30){
                    $("#status").text("sended");
                    $("#status").css({ "background-color": "#4CAF50",
                    "border": "none",
                    "color": "white",
                    "padding": "12px 20px",
                    "text-decoration": "none",
                    "font-size": "16px",
                    "margin": "10px"
                    });
                    $("#status").fadeIn(3000);
                    $("#status").fadeOut(3000);
                    someData = {
                            "username":  getCookie("username"),
                            "content": $("#textarea").val(),
                        
                        };
                
                    $.ajax({
                        
                        url: './api/xml/insertApiInXMLChat.php',
                        type: 'POST',
                        data: someData,
                        success: function(msg) {
                        // alert('message Sent');
                        }               
                    });
         }else{
                    $("#status").text("Wrong Input");
                    $("#status").css({ "background-color": "#FF6347",
                     "border": "none",
                      "color": "white",
                      "padding": "12px 20px",
                     "text-decoration": "none",
                     "font-size": "16px",
                     "margin": "10px"
                    });
                    $("#status").fadeIn(3000);
                    $("#status").fadeOut(3000);
            
            }       
         });



         let x=1;
         let y=0;
     
             function checkNoOfMsg() {
              $.ajax({
              type: "POST" ,
              url: "./JS/xml/Chat.xml" ,
              dataType: "xml" ,
              success: function(xml) {
              x= $(xml).find("message").length;
              }       
             });
         }
     
     function get_info() {
         $.ajax({
          type: "POST" ,
          url: "./JS/xml/Chat.xml" ,
           dataType: "xml" ,
           success: function(xml) {
     
           let z= $(xml).find("message").length;
     
             y=x;
              $(xml).find('message').each(function() {
                             
                             $('.Topcontainer').append(
                                 '<div class="container">' +
                                     '<img src="'+$(this).find('avatar').text()+'" alt="Avatar" style="width:100%;">' +
                                     '<span class="username">'+$(this).find('username').text()+'</span>' +
                                     '<p>'+ $(this).find('content').text()+'</p>' +
                                      
                                     '<span class="time-right">'+$(this).find('timestamp').text()+'</span>' +
                                       
                                    '</div> ');
                         });
     
     
              }       
     
     
         });
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
     
     setInterval(function(){
         checkNoOfMsg();
         if(x>y || x<y){
           
         $('.Topcontainer').empty(); 
         get_info();
        
         }
     }, 2000);
     
     
     
     
     
     
});


//Communicate();
