document.querySelector("#message_id").addEventListener("keypress", (e) => {
  // console.log(e);
  if (e.key === "Enter") {
    var userMessage = document.querySelector("input").value;
    console.log(userMessage);
    // var newMessage = document.createElement("Element to hold message content")
    // newMessage.innerHTML = userMessage;
    //document.querySelector(" main body element that holds all messages").appendChild(newMessage);
  }

})
