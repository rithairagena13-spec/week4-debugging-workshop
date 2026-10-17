### Exercise 1: Six Broken Snippets Analysis

### Snippet 1: Greeting

* **Error Type:** ReferenceError: studentname is not defined
* **What it means:** JavaScript is case-sensitive. The code tries to log studentname with a lowercase 'n', but the variable was created as studentName with a capital 'N'.
* **The Fix:** Update the variable name inside the console log to match the correct camelCase spelling:

javascript

console.log("Welcome, " + studentName)

Use code with caution.

### Snippet 2: Shouting

* **Error Type:** TypeError: city.toUppercase is not a function
* **What it means:** There is a capitalization typo in the built-in string method name. The correct JavaScript method requires a capital letter 'C' for toUpperCase().
* **The Fix:** Fix the casing of the method name:

javascript

console.log(city.toUpperCase())

Use code with caution.

### Snippet 3: Page title

* **Error Type:** TypeError: Cannot set properties of null (setting 'textContent')
* **What it means:** The query selector #page-titel is misspelled, so document.querySelector cannot find the element and returns null. The code then crashes because you cannot set properties on a null value.
* **The Fix:** Correct the spelling inside the query selector to match the HTML element's real ID attribute:

javascript

const title = document.querySelector("#page-title")

Use code with caution.

### Snippet 4: Score counter

* **Error Type:** TypeError: Assignment to constant variable
* **What it means:** The variable score was created using const, which makes it a read-only variable that cannot be reassigned or updated.
* **The Fix:** Change the variable declaration from const to let so its value can change:

javascript

let score = 0

Use code with caution.

### Snippet 5: Shopping list

* **Error Type:** SyntaxError: Unexpected string
* **What it means:** The array items are missing a comma delimiter to separate the string value "avocado" from "banana", which breaks JavaScript's grammar rules.
* **The Fix:** Insert a comma to separate the items inside the array brackets:

javascript

const fruits = ["mango", "avocado", "banana"]

Use code with caution.

### Snippet 6: Countdown

* **Error Type:** RangeError: Maximum call stack size exceeded
* **What it means:** The function calls itself over and over infinitely without a stop condition, causing the browser's execution memory stack to overflow and crash.
* **The Fix:** Add an execution guard clause at the top of the function to stop the loop when n drops below 0:

javascript

function countdown(n) {
  if (n < 0) return;
  console.log(n)
  countdown(n - 1)
}

Use code with caution.