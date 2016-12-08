var mainBodyDiv = document.querySelector("#main-body");
var bodyVar = document.querySelector("body");
var userInput =document.querySelector("input")
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

  messageDiv.appendChild(newMessage);
  addButtonsToMessage(messageDiv);
  mainBodyDiv.appendChild(messageDiv);

  clearButton.removeAttribute("disabled")
 }


function addButtonsToMessage(divElement) {
  var deleteButton = document.createElement("button");
  var editButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  divElement.appendChild(deleteButton);
  editButton.textContent = "Edit";
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
    bodyVar.classList.toggle("dark-theme-class")
  } else {
    bodyVar.classList.toggle("large-text-class")

  }

}

function createMessage(e) {
  if (e.key === "Enter") {
    var userMessage = userInput.value;
    userInput.value = "";
    addMessage(userMessage)
  }
}



userInput.addEventListener("keypress", createMessage)

 var clearButton = document.querySelector("#clear-messages")
  clearButton.addEventListener("click", () => {
  mainBodyDiv.innerHTML = "";
  clearButton.setAttribute("disabled", "disabled")
})


function editButtonFunc(e) {
    var char = userInput.value;
    editNode.querySelector("p").innerHTML = char;
    userInput.removeEventListener("keypress", createMessage)
      if (e.key === "Enter") {
        var char = userInput.value;
        editNode.querySelector("p").innerHTML = char;
        userInput.value = "";
        userInput.addEventListener("keypress", createMessage)
        userInput.removeEventListener("keypress", editButtonFunc)

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
    console.log("hey")
    editNode = e.target.parentNode;
    userInput.value = editNode.querySelector("p").innerHTML
    userInput.addEventListener("keypress", editButtonFunc)
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
