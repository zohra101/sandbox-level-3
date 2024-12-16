class Column1 {
    openingTag = "<div class = 'col' >";
    closingTag = "</div>";
    innerHTML = "";

    info(columnNumber) {
        console.log("This is column " + columnNumber);
    }

    constructor() {
        console. log("You ve constructed a Column.")
    }


}

class Column2 {
    openingTag = `<div class = 'col' >`;
    closingTag = `</div>"`;
    innerHTML = "";

    constructor(content="") {
        this.innerHTML = content;
    }

    tostring() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }

}

class Car {
    color = "red";

    // constructor() {
    //     console.log{"A new car was created."};
    // }

    constructor (newColor = "") {
        this.color = newColor;
        }

    honkHorn () {
    // IN A CLASS, THE function KEYWORD IN NOT USED FOR METHODS
        console.log("Honk honk!");
    }

    info() {
    /****************************
    * USE THE KEYWORD this TO ACCESS
    * PROPERTIES AND METHODS FROM WITHIN
    * AN OBJECT
    *****************************/
        console.log("The color is " + this.color);
    }

    toString() {
    /****************************
    * THE toString METHOD CUSTOMIZES
    * HOW AN OBJECT IS OUTPUT.
    *****************************/
        return "This car's color is " + this.color;
    }

}

function classExample() {
    debugger;
    const column1 = new Column();
    column1.innerHTML = "I'm column 1!";
    const column2 = new Column();
    column1.innerHTML = "I'm column 2!";
    const column3 = new Column();
    column1.innerHTML = "I'm column 3!";
}

function methodExample() {
    debugger;
    /****************************
    * A METHOD IS A FUNCTION IN AN OBJECT OR CLASS
    * IN A CLASS, THE function KEYWORD IN NOT USED FOR METHODS
    *****************************/
    const myCar = new Car();
    myCar.honkHorn() ;
}

function thisExample() {
    debugger;
    /****************************
    * USE THE KEYWORD this TO ACCESS
    * PROPERTIES AND METHODS FROM WITHIN
    * AN OBJECT
    *****************************/
    const car1 = new Car();
    const car2 = new Car();
    const car3 = new Car();

    car1.color = "silver";
    car2.color = "white";
    car3.color = "black";

    car1.info();
    car2.info();
    car3.info();
}

function toStringExample() {
    debugger;
    /****************************
    * - THE toString METHOD CUSTOMIZES
    * HOW AN OBJECT IS OUTPUT.
    * - THIS METHOD IS AUTOMATICALLY CALLED 
    * WHEN THE OBJECT IS USED LIKE A STRING. 
    * - RETURN THE STRING WHICH SHOULD BE THE OUTPUT.
    *****************************/
    const myCar = new Car();
    myCar.honkHorn() ;
    output(myCar.toString(), "outputTag3")

}

function constructorExample() {
debugger;
/****
* THE constructor IS A METHOD THAT
* AUTOMATICALLY RUNS WHEN THE OBJECT IS CREATED
* IT CAN ACCEPT PARAMETERS FOR THE OBJECT
*************/
    const column = new Column ("A new object was created.");
}