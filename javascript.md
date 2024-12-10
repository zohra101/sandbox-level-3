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
- When an undefined value exists, the default value applies.
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
2. Add an if else statement for the correct output.

### Single line code blocks
```javascript
if (isDone) output ("Done");
else output ("Not yet done");
```
- Curly braces are not required for single-line code blocks.

### Falsey values
```javascript

```
-  Values that evaluate to FALSE when they are used in a condition:
  - undefined
  - empty string `""`
  - zero `0`
  - `NaN`

### Truthy values
```javascript

```
- Values that evaluate to TRUE when they are used in a condition:
  - non-empty string `"I'm a string!"`
  - non-zero number `123`
  - arrays `[]`
  - objects

### For of loop
```javascript
for (let item of list)
```

- Loop though an array.
- The keyword `of`iterates through all of the items in the array. 

1. Use the keyword `for`.
2. Declare a changing variable with `let`.
3. Use the keyword `of`.
4. Add the array.

### For in loop
```javascript
 for (let property in myLists)
 ```
- The keyword `in` iterates through all the properties in an object.

1. Use the keyword `for`.
2. Declare a changing variable with `let`.
3. Use the keyword `in`.
4. Add the object.

### this method
`this. innerHTML`

```javascript
function info() {
        console.log("The color is " + this.color);
function thisExample() {
    debugger;
    const car1 = new Car();
    const car2 = new Car();
    const car3 = new Car();
    car1.color = "silver";
    car2.color = "white";
    car3.color = "black";
    car1.info();
    console.log(car1.color);
    car2.info();
    console.log(car2.color);
    car3.info();
    console.log(car3.color);
} 
 }
 ```
- Use keyword this to access properties and methods from within an object.
- Use the usual dot notation.
- Think of this as the name of the object.

1. Add a method called content.
2. Let it write the column innerHTML to the console.
3. Use it in practice4.

### Displaying an object
`output (myobject);`

- Directly displaying an object to the browser shows [Object object].

### Method to string
`output (myObject. toString());`
- The toString method is used to customize how an object is displayed.
- The toString is automatically called when the object is being used like a string.
