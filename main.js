const advices = []

let theDice = document.querySelector(".dice")
let theAdvice = document.querySelector(".advice")
let theId = document.querySelector(".id")

function randomAdviceNumber(arrayLength){
    return Math.floor(Math.random() * arrayLength + 1)
}

fetch('./advices.json')
  .then(response => response.json())
  .then(data => {

    advices.unshift(...data)
    theDice.addEventListener('click' , () => {
    const num = randomAdviceNumber(103) 
    const theSeenAdvice = advices.find(advice => advice.id === num)
    theId.textContent = theSeenAdvice.id;
    theAdvice.textContent = theSeenAdvice.content
})
  })
  .catch(error => {
    theAdvice.textContent = `Error : ${error.message}`
    theAdvice.style.color = 'red'
    document.body.appendChild(errMsg)
  });