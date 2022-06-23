let myName = document.getElementById("name")
let myLink = document.getElementById("greetings")
let myParagraph = document.getElementById("btn")

myLink.addEventListener("click", greetings)

function greetings(){
    myParagraph.innerHTML = "Hello " + myName.value + ", welcome to the bootcamp" 
}