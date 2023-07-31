

$(document).ready(function(){
    const input = document.getElementById('msg-box');
        input.focus();
    
    // enter();
    $("#msg-box").keyup(function(event){
        if (event.keyCode === 13){
            $("#send-btn").click();
        }
    });


    // For empty input box 
    $("#send-btn").click(function() {
        var msg = $("#msg-box").val()

        if (msg == "") {
            msg = "I love to travel via Air";
        }


        $("#chat-box").append("<div class='chat outgoing'><div class='details'><p>"+msg+"</p></div></div>");
        document.getElementById("msg-box").value = "";

        // $("#chat-box").append("<div class='item right'><span class='user'>"+msg+"</span></div>");
        // document.getElementById("msg-box").value = "";


      //   <div class="chat outgoing">
      //   <div class="details">
      //     <p>Hello</p>
      //   </div>
      // </div>
      // <div class=""id="chat-area"></div>

        
        $.ajax({
            url: "brain.php?bot="+msg,
            msg: msg,
            type: "post",
            success: function(data){
                bot = msg;

                    // Validate URL
                    function urlify(data) {
                        var urlRegex = /(https?:\/\/[^\s]+)/g;
                        return data.replace(urlRegex, function(url) {
                        //   return '<a href="' + url + '"> Check Here </a>';
                          return '<a onclick=window.open("' + url + '") href="#"> Check Here</a>';
                        })
                        // or alternatively
                        // return text.replace(urlRegex, '<a href="$1">$1</a>')
                      }
                      
                      var text = data;
                      var data = urlify(text);
                      
                      console.log(data)


                    $('#chat-box').append("<div class='chat incoming'><img src='./images/emma watson.jpg' alt='' /><div class='details'><p>"+data+"</p></div></div>"); 
                    // $('#chat-area').append("<div class='item'><div class='bot'>"+data+"</div></div>"); 


      //               <div class="chat incoming">
      //   <img src="images/emma watson.jpg" alt="" />
      //   <div class="details">
      //     <p>Hi</p>
      //   </div>
      // </div>
                  
                  //   document.getElementById("chat-area").scrollIntoView(true);
                    $('#chat-area').stop().animate({
                        scrollTop: $('#chat-area')[0].scrollHeight
                    }, 800);
            }
          });

        //   document.getElementById("chat-area").scrollIntoView(true);
          $('#chat-area').stop().animate({
            scrollTop: $('#chat-area')[0].scrollHeight
          }, 800);

        // Select input box after clicking SEND
        input.focus();

    });

    
});



function enter(event){

    if(event.keyCode==13){
        $("#send-btn").click();
    } 
}