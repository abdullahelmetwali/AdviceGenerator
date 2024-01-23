import advices from "./advices.json" assert {type:"json"}
let theDice = document.querySelector(".dice")
let theAdvice = document.querySelector(".advice")
let theId = document.querySelector(".id")
// For PC and Mobile 
let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

function randomAdviceNumber(min,max){
    return Math.floor(Math.random() * (max - min) + 0);
}

theDice.addEventListener(touchEvent, () =>{
    var allAdvices = Object.entries(advices)[randomAdviceNumber(0,103)]
    theId.innerHTML = allAdvices[1].adviceId
    theAdvice.innerHTML = `“${allAdvices[1].adviceContent}”` 
})
