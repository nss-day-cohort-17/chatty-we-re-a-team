document.querySelector("#message_id").addEventListener("keypress", (e) => {
  // console.log(e);
  if (e.key === "Enter") {
    var userMessage = document.querySelector("input").value;
    console.log(userMessage);
    var newMessage = document.createElement("p")
    newMessage.innerHTML = userMessage;
    document.querySelector("#main-body").appendChild(newMessage);
  }

})
