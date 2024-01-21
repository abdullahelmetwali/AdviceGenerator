import advices from "./advices.json" assert {type:"json"}
let theDice = document.querySelector(".dice")
let theAdvice = document.querySelector(".advice")
let theId = document.querySelector(".id")

function randomAdviceNumber(min,max){
    return Math.floor(Math.random() * (max - min) + 0);
}

theDice.addEventListener("click touchstart", () =>{
    var allAdvices = Object.entries(advices)[randomAdviceNumber(0,103)]
    theId.innerHTML = allAdvices[1].adviceId
    theAdvice.innerHTML = `“${allAdvices[1].adviceContent}”` 
})





