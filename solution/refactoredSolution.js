class Calculator {

  constructor() {
    this.resultDiv = document.getElementById("result-text")
    this.operationDispatch = {
      "+": add,
      "-": subtract,
      "*": multiply,
      "/": divide,
      "%": modulo
    }
  }

  displayResult(result) {
    this.resultDiv.innerHTML = (isNaN(result) || typeof result !== 'number') ? dogeProtec() : result
  }

  calculate(opA, opB, operand) {
    const result = this.operationDispatch[operand](parseFloat(opA), parseFloat(opB))
    this.displayResult(result)
  }

}

var myCalculator = new Calculator()
