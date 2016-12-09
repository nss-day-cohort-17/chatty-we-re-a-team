var mainBodyDiv = document.querySelector("#main-body");
var userInput =document.querySelector("#message_id")
var clearButton = document.querySelector("#clear-messages")
var editNode;
var myRequest = new XMLHttpRequest();

function parseJSON(e) {
  var data = JSON.parse(e.target.responseText)
    for (var i = 0; i < data.messages.length; i++) {
      addMessage(data.messages[i].message)
      console.log(data.messages[i].message)
    }
}

myRequest.addEventListener("load", parseJSON);
myRequest.open("GET", "messages.json");
myRequest.send();

function addMessage(userInput){

  var messageDiv = document.createElement("div");
  var newMessage = document.createElement("p");
  newMessage.innerHTML = userInput;
  addButtonsToMessage(messageDiv);
  messageDiv.appendChild(newMessage);
  // addButtonsToMessage(messageDiv);
  mainBodyDiv.appendChild(messageDiv);

  clearButton.removeAttribute("disabled")
 }


function addButtonsToMessage(divElement) {
  var deleteButton = document.createElement("button");
  var editButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("btn-danger")
  divElement.appendChild(deleteButton);
  editButton.textContent = "Edit";
  editButton.classList.add("btn-info", "spacing")
  divElement.appendChild(editButton);

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
    document.querySelector("#darkThemeThing").classList.toggle("dark-theme-class")
  } else {
    mainBodyDiv.classList.toggle("large-text-class")

  }

}

function createMessage(e) {
  if (e.key === "Enter") {
    var userMessage = userInput.value;
    if (userMessage !== "") {
      addMessage(userMessage)
      userInput.value = "";
    }
  }
}

function clearAllMessages() {
  mainBodyDiv.innerHTML = "";
  clearButton.setAttribute("disabled", "disabled")
}

userInput.addEventListener("keypress", createMessage)


clearButton.addEventListener("click", clearAllMessages)

function finishEditFunc(e) {
  if (e.key === "Enter") {
    var char = userInput.value;
    editNode.querySelector("p").innerHTML = char;
    userInput.value = "";
    userInput.addEventListener("keypress", createMessage)
    userInput.removeEventListener("keyup", editButtonFunc)
  }
}

function editButtonFunc(e) {
    var char = userInput.value;
    editNode.querySelector("p").innerHTML = char;
    userInput.removeEventListener("keypress", createMessage)
    if (e.key === "Enter") {
      var char = userInput.value;
      editNode.querySelector("p").innerHTML = char;
      userInput.value = "";
      userInput.addEventListener("keypress", createMessage)
      userInput.removeEventListener("keyup", editButtonFunc)
    }
  }

mainBodyDiv.addEventListener("click", (e) => {
  if (e.target.textContent === "Delete") {
    var buttonParent = e.target.parentNode;
    console.log(buttonParent);
    mainBodyDiv.removeChild(buttonParent);
    if (!mainBodyDiv.querySelector("div")) {
      clearButton.setAttribute("disabled", "disabled")
    }
  }else if (e.target.textContent === "Edit"){
    editNode = e.target.parentNode;
    userInput.value = editNode.querySelector("p").innerHTML
    userInput.focus();
    userInput.addEventListener("keyup", editButtonFunc)
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
