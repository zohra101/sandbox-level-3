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