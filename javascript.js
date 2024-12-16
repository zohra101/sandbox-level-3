function bracketNotationExample() {
    const myCar = {
        color: "red",
        year: 2023,
        forSale: false,
    };
    const propertyName = "color";
    const myValue = myCar[propertyName];

    output(`The ${propertyName} is ${myValue}. <br>`)
}

function greetingExample() {
    outputDefault("Hello World!", "greetingTag")
}

function overwriteExample() {
    debugger;
    const mycar = 1
    color: "red",
    outputDefault("hello", undefined, false);
}


function propertyChainingExample() {
    const myCar = {
        components: {  
            engine: {  
                parts: { 
                    cylinders: { 
                        count: 4
                    }, 
                }, 
            }, 
        } ,  
    }
        const cylinderCount = myCar.components.engine.parts.cylinders.count;
        output (cylinderCount, "propertyChainingTag", false);
}

function itemChainingExample() {
    myArrays = [
        [1,2,3],
        [4,5,6],
        ["A","B","C"]
    ];

    const value = myArrays[0][2]; 
    output(value, "itemChainingTag", false);

}
