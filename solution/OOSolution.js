// Your OO/ES6/Prototype solution here!

  let resultDiv = document.getElementById("result-display-container")
  let userInputA = document.getElementById("opA")
  let userInputB = document.getElementById('opB')
  let operator = document.getElementById('operand')


  let submitButton = document.getElementById("calculation-submitter")
    // alert('on the page')
    submitButton.addEventListener('click', ()=>{
      console.log(userInputA.value)
      let a = parseInt(userInputA.value)
      console.log(userInputB.value)
      let b = parseInt(userInputB.value)
      console.log(operator.value)
      let operand = operator.value

function bothNumbers (a, b){ return (Number.isInteger(a) && Number.isInteger(b))}
//if they ARE BOTH numbers then check for div by zero if not -dogeProtec


if (bothNumbers(a, b) && !notDivByZero(b, operand)){
  let answer =calculator(a, operand, b); resultDiv.innerHTML = answer} else {dogeProtec()}



//after checking im not dividnig by zero - then excecute the calculation
function modOrDivide (operand){return operand ===  "/" || operand === "%"}

function notDivByZero (b, operand){
  return modOrDivide(operand) && b === 0}


    })

//
// })
