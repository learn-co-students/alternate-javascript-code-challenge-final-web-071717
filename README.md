# Alternate JavaScript Code Challenge Final
  Read all instructions before beginning

## Objectives

- DOM Manipulation
- Events and Event Handlers
- Callback function handling
- Constructors and Prototypes or ES6 Classes (For part two)

## Instructions

We're building out simple two operand calculator. A user will provide two values, select an operator, and perform the calculation

## Deliverables

- Implement the functionality to perform a calculation given two valid operators (as integers) and an operand
- Be able to perform multiple operations
- Display the result in the DOM
- Manage bad user input

### Functionality demo

![Functionality Demo](./assets/example_functionality.gif)

### Part One - Create a solution without utilizing Object Orientation(no classes) ****NO jQuery****.

1. **Create a working solution in `solution/vanillaSolution.js`**
  **DO NOT SKIP PART ONE AND LEAVE THE SOLUTION FOR PART ONE IN ITS OWN FILE**

2. When a users clicks the 'Calculate' img (represented as a big 'ol DOGE here!), the result should display in a separate div on the screen (this div has already been created and is in index.html. Identify it.)
  - Pressing 'Calculate' when a result is already displaying should replace the current displayed result with the new result

3. Operations for [+, -, /, \*, %] should all be provided and a user should be able to select/write in any of those into the operator field before submitting

4. If a user provides invalid input (non-numbers for the operators, division by zero) we should not perform the calculation. A function called `dogeProtec` has been provided and loaded into the global scope via index.html. This function should be invoked if a user performs a calculation that does not return a rational number.
  - Hint: while we can, (and you should feel free to), write logic entirely our JS to handle this, is there a simple change we could make to our HTML tags to only accept certain kinds of input?

### Part Two - Refactoring with Constructors and Prototypes (feel free to use either ES5 or ES6)

**Note** When creating constructors and prototypes, you may use ES6 classes or just create the constructor function separately. Your choice.

1. **Create your refactored OO Solution in a new file.(`solution/refactoredSolution.js`)**

2. All code pertaining to the calculations themselves should be placed in `solution/operation.js` (The file is imported already in index.html. You will have access to all functions defined within from your other .js files)

3. While `vanillaSolution.js` and `refactoredSolution.js` were already imported in our index.html file, we have not yet imported our `operations.js` script! Please make the necessary alteration (either in `index.html` or in `refactoredSolution.js`) so that `refactoredSolution.js` has access to the functions defined within

4. Our refactored solution (using either a prototype or ES6 class) should own the callback for when the user clicks our submit doge img button and update the DOM accordingly

5. Our refactored solution should keep track of previously calculated values somehow. We don't need to display, but our class does need to have the functionality to hold them.

6. Our refactored solution should have a function that returns the sum of all previously calculated values

### Important Notes

1. Do not make more work for yourself than necessary! Styling should not need to be altered and all changes in our index.html file will revolve around affixing callbacks to them.
2. Take a moment to identify (in the index.html file) which DOM elements you are going to:
  - Alter when a calculation is completed
  - Capture user input from
  - Fire a callback from when a user clicks
