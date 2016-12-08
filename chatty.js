
function addDeleteButtonToMessage(divElement) {
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  divElement.appendChild(deleteButton);
}

document.querySelector("#message_id").addEventListener("keypress", (e) => {
  // console.log(e);
  if (e.key === "Enter") {
    var userMessage = document.querySelector("input").value;
    document.querySelector("input").value = "";
    var messageDiv = document.createElement("div");
    var newMessage = document.createElement("p");
    newMessage.innerHTML = userMessage;
    messageDiv.appendChild(newMessage);
    addDeleteButtonToMessage(messageDiv);
    document.querySelector("#main-body").appendChild(messageDiv);
    clearButton.removeAttribute("disabled")
  }
})

 var clearButton = document.querySelector("#clear-messages")
  clearButton.addEventListener("click", () => {
  document.querySelector("#main-body").innerHTML = "";
  clearButton.setAttribute("disabled", "disabled")
})
