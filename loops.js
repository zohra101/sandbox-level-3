function forOfExample()
/***********************************
* HOW TO ITERATE THROUGH ALL THE
* ITEMS IN AN ARRAY WITH for of
* 1. USE THE KEYWORD for
* 2. DECLARE A CHANGING VARIABLE WITH let
* 3. USE THE KEYWORD of
* 4. INCLUDE THE ARRAY
***********************************/
{
    debugger;
        const myArray = ["Hello world!", 2024, true];
        for (let item of myArray)
            output(`${item}<br>`);
}

function forInExample() 
/***********************************
* HOW TO ITERATE THROUGH ALL THE
* PROPERTIES OF AN OBJECT WITH for in
* 1. USE THE KEYWORD for
* 2. DECLARE A CHANGING VARIABLE WITH let
* 3. USE THE KEYWORD in
* 4. INCLUDE THE ARRAYI[
********************************/

{
    debugger;
    const myObject = {
        myString: "Hello World",
        myNumber: 2024,
        myBoolean: true,
    };

    for (let propertyName in myObject) {
        const value = myObject[propertyName];
        output(`${propertyName} is ${value}<br>`, "outputTag2");
    }
}