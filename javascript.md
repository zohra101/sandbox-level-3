# JavaScript

### Arrays
Create an empty array.
`const myArray = [];`

Push values into the array.
`myArray.push("array");`
`myArray.push(234);`

### Window object
  ```javascript
  function output(message) {
    window.outputTag.innerHTML += message;
  }
  ```
- Represents the browser and its features.
- Contains JS functions and variables.
- The `id` of an HTML element is attached to the window object: `window.[id].innerHTML`.
  
### Bracket notation
```javascript
  function bracketNotationExample() {
    const myCar = {
      color: "red",
      year: 2023,
      forSale: false,
      };
      
    const propertyName = "color";
    const myValue = myCar[properName];

    output(`The ${propertyName} is ${myValue}. <br>`)
  }
```
- Similar to array notation.
- Allows you to access an object property with a variable or a string.  

### Output to a specified element ID
```javascript
function outputSpecifiedId(message, outputTag) {
    window[outputTag].innerHTML += message;
}
```
- An element ID can be specified in a function.
- 
### Default parameter values
```javascript
function outputDefault(message, outputTag = "outputTag") {
    window[outputTag].innerHTML += message;
}
```
```javascript
function output(message="", outputTag = "outputTag", shouldAppend = true)
```
- Parameters can automatically be given a default value.
- When an undefined value.
- By specifying default parameter values in functions, VSCode automatically pops up information about what type each parameter should be. 

### If else
```javascript
if (isDone) {
output ("Done");
} else {
output ("Not yet done");
}
```
- If the condition is true, the first code block runs.
- Otherwise, the second code block runs.

### Should append
```javascript
function outputShouldAppend(message, outputTag) {
  if (shouldAppend) window[outputTag].innerHTML += message;
else window[outputTag].innerHTML = message;
}
```
- Update the utility function to append or overwrite the output:
1. Add the shouldAppend parameter.
2. Add an if else statement for the correct output

### Single line code blocks
```javascript
if (isDone) output ("Done");
else output ("Not yet done");
```
- Curly braces are not required for single-line code blocks.

### Falsey values
```javascript

```
-  Values that evaluate to FALSE when they are used in a condition 
  - undefined
  - empty string `""`
  - zero `0`
  - `NaN`

### Truthy values
```javascript

```
- Values that evaluate to TRUE when they are used in a condition
  - non-empty string `"I'm a string!"`
  - non-zero number `123`
  - arrays `[]`
  - objects

