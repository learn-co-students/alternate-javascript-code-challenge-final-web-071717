- take out solution parts
- change input type to text (that should be a rubrick 5 if they change the html form!)
- they need to change it from a string to an integer

1. **Create a working solution in `solution/vanillaSolution.js`**
  **DO NOT SKIP PART ONE AND LEAVE THE SOLUTION FOR PART ONE IN ITS OWN FILE**

  - The input field for the first operand has been provided to you

2. When a users clicks the 'Calculate' button, the result should display in a separate div on the screen

  - Pressing 'Calculate' when a result is already displaying should replace the current displayed result with the new result

3. If a user provides invalid input (not integers for the operators) we should not perform the calculation and an error message should be displayed

### Part Two - Refactoring with Constructors and Prototypes (feel free to use either ES5 or ES6)

**Note** When creating constructors and prototypes, you may use ES6 classes or just create the constructor function separately. Your choice.

1. **Create your refactored OO Solution in a new file.(`solution/refactoredSolution.js`)**
2. All code pertaining to the calculation itself should be placed in `solution/operation.js` (The file is imported already in index.html. You will have access to all functions defined within from your other .js files)
3. While `vanillaSolution.js` and `refactoredSolution.js` were already imported in our index.html file, we have not yet imported our `operations.js` script! Please make the necessary alteration (either in `index.html` or in `refactoredSolution.js`) so that `refactoredSolution.js` has access to the functions defined within
4. Our refactored solution (using either a prototype or ES6 class) should own the callback for when a user hits submit and update the DOM accordingly
5. Our refactored solution should keep track of previously calculated values
6. Our refactored solution should have a function that calculates the sum of all previously calculated values
  - DOM should have a button that, when clicked, should display this sum
