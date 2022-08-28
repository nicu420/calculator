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
    }
}

const result = document.querySelector('.result');
const operation = document.querySelector('.operation');

let firstNumber, secondNumber;

const numberButtons = document.querySelectorAll('.number');

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        if (operation.textContent === '') {
            result.textContent = '';
        }
        result.textContent += numberButtons[i].textContent;
    });
}

const operators = document.querySelectorAll('.operator');

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', () => {
        firstNumber = parseInt(result.textContent);
        operation.textContent = operators[i].textContent;
        result.textContent = '';
    });
}

const equals = document.querySelector('.equals');

equals.addEventListener('click', () => {
    secondNumber = parseInt(result.textContent);
    result.textContent = operate(operation.textContent, firstNumber, secondNumber);
    operation.textContent = '';
})

const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    firstNumber = undefined;
    secondNumber = undefined;
    result.textContent = '';
    operation.textContent = '';
})