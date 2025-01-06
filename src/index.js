import sayHiTo from "../modules/greeting.js";
// import toNoCase from "to-no-case";
// import camel from "to-camel-case"; 
import space from "to-space-case"; 
// import space from "../node_modules/to-space-case/index.js"; 

//const name = camel("Alex Marjanovic");
const name = space("AlexMarjanovic");
sayHiTo (name) ;