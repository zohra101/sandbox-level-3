//
// function output(message) {
//     window.outputTag.innerHTML += message;
// }

//
function outputSpecifiedId(message, outputTag) {
    window[outputTag].innerHTML += message;
}

//
function outputDefault(message, outputTag = "outputTag") {
    window[outputTag].innerHTML += message;
}

//
function output(message = "", outputTag = "outputTag", shouldAppend = true) {
    if (shouldAppend) window[outputTag].innerHTML += message;
    else window[outputTag].innerHTML = message;
}

export function outputModule(message = "", outputTag = "moduleTag", shouldAppend = true) {
    if (shouldAppend) window[outputTag].innerHTML += message;
    else window[outputTag].innerHTML = message;
}