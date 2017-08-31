class Calculator {

  constructor() {
    this.previousResults = []
    this.resultDiv = document.getElementById("result-text")
    this.resultDiv.innerHTML = ""
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
    this.resultDiv.innerHTML = result
  }

  calculate(opA, opB, operand) {
    const result = this.operationDispatch[operand](parseFloat(opA), parseFloat(opB))
    this.previousResults.push(result)
    this.displayResult(result)
  }

  sumAll() {
    this.displayResult(this.operationDispatch["SUM ALL"])
  }

}

var myCalculator = new Calculator()
