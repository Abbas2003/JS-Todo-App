var userInput = document.getElementById("userInput")
console.log(userInput.value)

function getUserValue(){
    var text = document.createTextNode(userInput.value)
    var node = document.createElement("li")
    var editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    var delBtn = document.createElement("button")
    delBtn.textContent = "Delete"
    // delBtn.style={ backgroundColor: "red"}
    
    node.appendChild(text)
    document.getElementById("main").appendChild(node).appendChild(delBtn)
    text.value = " "
    console.log(text)
}

// function clear(){
//     userInput.value = ""
// }