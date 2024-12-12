class Column {
    openingTag = `"<div class = 'col' >"`;
    closingTag = `"</div>"`;
    innerHTML = `""`;
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

}

function thisExample() {

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