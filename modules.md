## Modules
- Allows the code in a JavaScript file to be used in other JavaScript files.
- Uses the keywords export and import.

### Keyword export
`export function myFunction();`
- Makes code usable in other JavaScript files.

#### Example:
```javascript
export function myModule() {
    console.log("This is a module.");
}
```

### Keyword import
`import { myFunction } from " ./module.js";`

- Uses code from another JavaScript file.
- The ./ is the relative path that means the current folder.
- 
#### SYNTAX:
- use a pair of curly braces.
- insert the module name.
- use the keyword from.
- include the path of the file in quotes "".
- use a dot and a forward slash to represent the current folder.
- RELATIVE PATH NOTATION uses the dot and forward slash.
- the type attribute must be set to "module".
`<script src="./modules.js" type="module"></script>`
`<script src="./modulesTest.js" type="module"></script>`

#### Example:
```javascript
import { outputModule } from "./utility-functions.js"
function moduleExample() {
    debugger;
    myModule();
    outputModule("Hello World!");
}
```
### Window Module
 `window.moduleExample = moduleExample;`
- It's only necessary to attach a module to the window object if the module will be used by the HTML file.
- moduleExample is directly used by the HTML file.
- outputModule is not directly used by the HTML.
- The property name doesn't need to match the module name.
- The module must be called by the name attached to the window object.
  
### Function Hoisting
`window.moduleExample = moduleExample;`

- JavaScript invisibly brings function definitions to the top.
- Functions can be called before they are defined in a file.

### Object Oriented Programming
`const column = new Column("my content");`

- Create objects that bundle related data and functions together.
- The keywords `class`, `new`, and `this` are used to achieve OOP.

### Folder Structure
```
> controllers
> modules
> utils
```
- `modules` Contains functions specific to the project.
- `utils` Contains functions that can be used by other projects.
- `controllers` Contains functions that control the flow of how modules are used.
- Usually only 1 function or class per file.

### Relative file paths


### Module errors

#### Uncaught syntax error: Cannot use import statement outside a module
- `type="module"` is missing from the `<script>` tag: 

#### GET http:://localhost:8081/utils/output net::ERR_ABORTED 404 (Not Found)
- The import command has the incorrect path; it is missing the `.js` extension or the file name does not match the file in the folder structure. 

### Automatically import modules in VS Code
1. Open the module file.
2. Open the file that will import the module.
3. Start typing the module name.
4. Select the module from the popup list.