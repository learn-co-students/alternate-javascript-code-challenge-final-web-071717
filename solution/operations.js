function add(opA, opB) {
  return (opA + opB)
}

function subtract(opA, opB) {
  return (opA - opB)
}

function multiply(opA, opB) {
  return (opA * opB)
}

function divide(opA, opB) {
  return (opB !== 0) ? (opA / opB) : dogeProtec()
}

function modulo(opA, opB) {
  return (opA % opB)
}

function sum(collection) {
  return collection.reduce(add)
}
