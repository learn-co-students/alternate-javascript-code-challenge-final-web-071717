let previousResults = []
let resultDiv = document.getElementById("result-text")
let operationDispatch = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
  "%": modulo,
  "SUM ALL": sum
}

function displayResult(result) {
  resultDiv.innerHTML = (isNaN(result) || typeof result !== 'number') ? dogeProtec() : result
}

function calculate(opA, opB, operand) {
  const result = operationDispatch[operand](parseFloat(opA), parseFloat(opB))
  previousResults.push(result)
  displayResult(result)
}
