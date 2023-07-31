

// Gets the first message
function firstBotMessage() {
    let firstMessage = "How may I help?"
    document.getElementById("robo-block").innerHTML = '<div class="robo">' + firstMessage + '</div>';

    // let time = getTime();

    // $("#chat-timestamp").append(time);
    // document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#msg-box").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p class="user">' + userText + '</p>';

    $("#msg-box").val("");
    $("#user-block").append(userHtml);
    document.getElementById("container").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}


function sendButton() {
    getResponse();
}


$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});