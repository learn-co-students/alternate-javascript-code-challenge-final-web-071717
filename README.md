# Alternate JavaScript Code Challenge Final
  Read all instructions before beginning

## Objectives

- DOM Manipulation
- Events and Event Handlers
- Callback function handling
- Constructors and Prototypes or ES6 Classes (For part two)

## Instructions

We're building out a simple two operand calculator. A user will provide two values, select an operator, and perform the calculation

## Deliverables

- Implement the functionality to perform a calculation given two valid operands (as integers) and an operator, including: [+, -, \*, /, %]
- Be able to perform multiple operations
- Display the result in the DOM
- Manage bad user input

### Functionality demo

![Functionality Demo](./assets/example_functionality.gif)

### Instructions

1. **Create a working object oriented calculator solution in `solution/OOSolution.js`**

2. When a users clicks the 'Calculate' image (represented as a big 'ol DOGE!), the result should display in a separate div.

3. All functions that perform the actual calculations of values should be placed in `solution/operation.js`, even if they are used elsewhere. The file is imported already in index.html. You will have access to all functions defined within from your other .js files.

4. If a user provides invalid input (non-numbers for the operands, division by zero, improper types) we should not perform any calculation. We will handle bad input with the function `dogeProtec`. This function has already been made -- you only need to invoke it.

5. Our refactored solution should keep track of previously calculated values.

6. Our refactored solution should have a function that calculates the sum of all previously calculated values.

### Important Notes

1. Do not make more work for yourself than necessary! Styling should not need to be altered and changes in our index.html file should revolve around linking up our javascript functions to them.
2. Take a moment to identify (in the index.html file) which DOM elements you are going to:
  - Alter when a calculation is completed
  - Capture user input from
  - Fire a callback from when a user clicks
