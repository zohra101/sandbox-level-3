# Dev Tools

### Console
- You can enter individual JS commands directly.
- You view the properties of objects. In the console,`window.`displays the properties associated with the `window` object.

### Debugger
- You view the properties of objects. The Scope window displays a tree. 

### Step button  --> (right arrow)
- Runs code one line at a time

### Resume button > (play button)


### Step into button (down arrow with dot below it)
- Runs code one line at a time, and goes through every line of each function

### Step over button (curved arrow over a dot)
- Runs code one line at a time, and skips display of function code

### Step out button (up arrow with dot below it)
- Runs all of the current function until it is out of that function
- 
### Breakpoints
- Click on the left of the line number that you want the debugger to stop on; not all lines can have one
- Stops running code when it reaches the selected lines
- Click on the line to place a red breakpoint dot
- Not all lines can have a breakpoint

### Conditional breakpoints
- Stops running code at the selected line if a condition is met
- Must specify the condition
- Right click on a breakpoint then specify the condition
- Condition examples: `item > 2000` or `item === true` or `item !== 5`

### Logging to the console
```javascript
console.log("This is a message.");
console.warn ("This is a warning.");
console.error ("This is an error.");
```
- Display messages in the console instead of the web page for debugging purposes or quick output.
- 
`console.warn`
- highlights the message with yellow
- provides info where the console command was run
- Example: can be used to specify that a parameter is not being used correctly
- 
`console.error`
- highlights the message with red
- provides info where the console command was run
- Example: can be used to specify that a parameter is not being used correctly

