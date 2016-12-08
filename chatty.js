var mainBodyDiv = document.querySelector("#main-body");
var bodyVar = document.querySelector("body");
var myRequest = new XMLHttpRequest();

function parseJSON(e) {
  var data = JSON.parse(e.target.responseText)
    console.log(data);
}

myRequest.addEventListener("load", parseJSON);
myRequest.open("GET", "messages.json");
myRequest.send();





function addDeleteButtonToMessage(divElement) {
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  divElement.appendChild(deleteButton);

}
// Executed when a checkbox is clicked, checks to see if the checkbox has the attribute checked,
// if it does not, the function adds it to the checkbox, then calls toggleClass function with checkbox as argument,  // which is from the eventListener, so checkbox will either be darkTheme or largeText
function addAttribute(checkbox) {
  if (!checkbox.hasAttribute("checked")) {
    checkbox.setAttribute("checked", true);
    toggleClass(checkbox);
  } else {
    checkbox.removeAttribute("checked");
    toggleClass(checkbox);
  }
}

// Executed after a checkbox is clicked and addAttribute is run, checks to see which checkbox was clicked,
// then toggles the appropriate class
function toggleClass(checkbox) {
  if (checkbox === darkTheme) {
    bodyVar.classList.toggle("dark-theme-class")
  } else {
    bodyVar.classList.toggle("large-text-class")

  }

}



document.querySelector("#message_id").addEventListener("keypress", (e) => {
  // console.log(e);
  if (e.key === "Enter") {
    var userMessage = document.querySelector("input").value;
    document.querySelector("input").value = "";
    var messageDiv = document.createElement("div");
    var newMessage = document.createElement("p");
    newMessage.innerHTML = userMessage;


    mainBodyDiv.appendChild(newMessage);

    messageDiv.appendChild(newMessage);
    addDeleteButtonToMessage(messageDiv);
    document.querySelector("#main-body").appendChild(messageDiv);

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
    if (!mainBodyDiv.querySelector("div")) {
      clearButton.setAttribute("disabled", "disabled")
    }
  }
})


// Listener on dark-theme checkbox.  When clicked, addAttribute function will run with darkTheme variable as argument
var darkTheme = document.querySelector("#dark-theme");
darkTheme.addEventListener("click", () => {
  addAttribute(darkTheme);
});

// Listener on large-text checkbox.  When clicked, addAttribute function will run with largeText variable as argument
var largeText = document.querySelector("#large-text");
largeText.addEventListener("click", () => {
  addAttribute(largeText);
});
