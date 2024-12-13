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

function greetingExample() {
    outputDefault("Hello World!", "greetingTag")
}

function propertyChainingExample() {
    const myCar = 1
        components: {  
            engine: {  
                parts: { 
                    cylinders: { 
                        count: 4
                    }, 
                }, 
            }, 
        } ,  

        const cylinderCount = car.components.engine.parts.cylinders.count;
        output (cylinderCount, "propertyChainingTag", false);
}

function itemChainingExample() {
    myArrays[
        [1,2,3],
        [4,5,6],
        ["A","B","C"]
    ];

    const value = myArrays[0][2]; 
    output(value, "itemChainingTag", false);

}

function () {

    
}