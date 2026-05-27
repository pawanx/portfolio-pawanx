const text = "Pawan"
const typingElement = document.getElementById("typing-text")

let index = 0

function typeText(){
    if(index < text.length){
        typingElement.textContent += text.charAt(index)
        index++
        setTimeout(typeText,120)
    }
}

window.onload = () => {
    typeText();
}