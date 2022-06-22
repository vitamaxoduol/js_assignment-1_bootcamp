const submitIt = document.getElementById('btn')
const inputName = document.getElementById('myName')
const welcomeToTheBootcamp = document.getElementById('greetMe')

submitIt.addEventListener('click', greetMe)

function greetMe(){
    welcomeToTheBootcamp.innerHTML = "Hello " + inputName.value + ", welcome to the bootcamp"
}