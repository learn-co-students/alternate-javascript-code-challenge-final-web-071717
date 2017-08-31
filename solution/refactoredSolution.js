class Calculator {

  constructor() {
    this.previousResults = []
    this.resultDiv = document.getElementById("result-text")
    this.operationDispatch = {
      "+": add,
      "-": subtract,
      "*": multiply,
      "/": divide,
      "%": modulo,
      "SUM ALL": sum
    }
  }

  displayResult(result) {
    this.resultDiv.innerHTML = (isNaN(result) || typeof result !== 'number') ? dogeProtec() : result
  }

  calculate(opA, opB, operand) {
    const result = this.operationDispatch[operand](parseFloat(opA), parseFloat(opB))
    this.previousResults.push(result)
    this.displayResult(result)
  }
}

var myCalculator = new Calculator()
