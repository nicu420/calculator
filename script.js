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
result.textContent = 0;
const operation = document.querySelector('.operation');

let firstNumber = 0, secondNumber, operator = '', value;

const numberButtons = document.querySelectorAll('.number');

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        result.textContent = parseInt(result.textContent + numberButtons[i].textContent);
        if (operator === '') {
            operation.textContent = '';
        } else {
            operation.textContent += numberButtons[i].textContent;
        }
    });
}

const operators = document.querySelectorAll('.operator');

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', () => {
        if (operator === '') {
            firstNumber = parseInt(result.textContent);
        }
        operator = operators[i].textContent;
        operation.textContent = parseInt(firstNumber) + operator;
        result.textContent = '';
    });
}

const equals = document.querySelector('.equals');

equals.addEventListener('click', () => {
    secondNumber = parseInt(result.textContent);
    result.textContent = operate(operator, firstNumber, secondNumber);
    operation.textContent = parseInt(firstNumber) + operator + parseInt(secondNumber) + ' = ';
    operator = '';
})

const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    firstNumber = 0;
    secondNumber = undefined;
    result.textContent = 0;
    operation.textContent = '';
    operator = '';
})
