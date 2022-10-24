
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
    if (b == 0) return "ERROR";

    return (a / b).toFixed(2);
}
function modulo(a, b) {
    return a % b;
}


function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        case '%':
            return modulo(a, b);
        default:

    }
}
let currentValue = 0;
let previousValue = 0;
let currentOperation = "";
let previousOperation = "";
let temp = "";




const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearAll = document.querySelector('.clearAll');
const equal = document.querySelector('.equal');
const displayNum = document.querySelector('.displayNum');
const displayOP = document.querySelector('.displayOP');
const clearNum = document.querySelector('.clearNum');

numbers.forEach(num => num.addEventListener('click', function (num) {

    if (displayNum.textContent && currentOperation) {
        currentOperation = "";
        displayNum.textContent = "";
        displayOP.textContent = "";
    }

    displayNum.textContent += num.currentTarget.textContent;
    currentValue = parseFloat(displayNum.textContent);
}));

clearAll.addEventListener('click', function () {
    displayNum.textContent = "";
    displayOP.textContent = "";
    currentValue = 0;
    previousValue = 0;
    previousOperation = "";

});

clearNum.addEventListener('click', function () {
    temp = Array.from(displayNum.textContent);
    displayNum.textContent = temp.slice(0, temp.length - 1).join("");
    currentValue = parseFloat(displayNum.textContent);
});

operators.forEach(op =>
    op.addEventListener('click', function (op) {
        displayOP.textContent = op.currentTarget.textContent;
        previousOperation = displayOP.textContent;
        currentOperation = previousOperation;
        previousValue = currentValue;
    }));

equal.addEventListener('click', function (eq) {
    displayOP.textContent = eq.currentTarget.textContent;
    displayNum.textContent = operate(previousOperation, previousValue, currentValue);
    currentOperation = "=";
    currentValue = parseFloat(displayNum.textContent);
});



