var mainBodyDiv = document.querySelector("#main-body");

document.querySelector("#message_id").addEventListener("keypress", (e) => {
  // console.log(e);
  if (e.key === "Enter") {
    var userMessage = document.querySelector("input").value;
    document.querySelector("input").value = "";
    console.log(userMessage);
    var newMessage = document.createElement("p")
    newMessage.innerHTML = userMessage;

    document.querySelector("#main-body").appendChild(newMessage);
    clearButton.removeAttribute("disabled")
  }

})
 var clearButton = document.querySelector("#clear-messages")
  clearButton.addEventListener("click", () => {
  document.querySelector("#main-body").innerHTML = "";
  clearButton.setAttribute("disabled", "disabled")


})
