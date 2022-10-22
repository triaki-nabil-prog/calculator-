
// functions for basic math operations 
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}


function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "wrong operator";
    }
}



// get the nodlist for all button nodes 
const buttons = document.querySelectorAll('button');
// loop through all buttons and add a event listener 
buttons.forEach(buttonClick => buttonClick.addEventListener("click", function (buttonClick) {
    display(buttonClick);
    buttonClick.stopPropagation();
}));
// execute this function when event triggered and 
function display(event) {
// gets the text content of the button triggered by the event 
    console.log(event.target.textContent);
}