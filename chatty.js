var mainBodyDiv = document.querySelector("#main-body");

document.querySelector("#message_id").addEventListener("keypress", (e) => {
  // console.log(e);
  if (e.key === "Enter") {
    var userMessage = document.querySelector("input").value;
    document.querySelector("input").value = "";
    console.log(userMessage);
    var newMessage = document.createElement("p")
    newMessage.innerHTML = userMessage;

    mainBodyDiv.appendChild(newMessage);
    clearButton.removeAttribute("disabled")
  }

})
 var clearButton = document.querySelector("#clear-messages")
  clearButton.addEventListener("click", () => {
  mainBodyDiv.innerHTML = "";
  clearButton.setAttribute("disabled", "disabled")


})

mainBodyDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    var buttonParent = e.target.parentNode;
    console.log(buttonParent);
    mainBodyDiv.removeChild(buttonParent);
  }
})
