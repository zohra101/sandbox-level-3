class Column {
    openingTag = `<div class = 'col' >`;
    closingTag = `</div>"`;
    innerHTML = "";

    info(columnNumber) {
        console.log("This is column " + columnNumber);
    }
}

class Car {
    color = "red";
    honkHorn () {
    // IN A CLASS, THE function KEYWORD IN NOT USED FOR METHODS
    console.log("Honk honk!");
    }

    info() {
        console.log("The color is " + this.color);
    }

    toString() {
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
    * A METHOD IS A FUNCTION IN AN OBJECT OR CLASS
    * IN A CLASS, THE function KEYWORD IN NOT USED FOR METHODS
    *****************************/
    const car1 = new Car();
    const car2 = new Car();
    const car3 = new Car();

    car1.info();
    car2.info();
    car3.info();
}

function toStringExample() {
    debugger;
    /****************************
    * THE toString METHOD CUSTOMIZES
    * HOW AN OBJECT IS OUTPUT.
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
const column = new Column ("I'm column 1");
}