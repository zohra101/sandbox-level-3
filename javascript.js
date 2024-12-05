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