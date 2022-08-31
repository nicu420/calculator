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
        if (value === '') {
            result.textContent = parseFloat(numberButtons[i].textContent);
            value = result.textContent;
        } else {
            result.textContent = parseFloat(result.textContent + numberButtons[i].textContent);
        }

        if (operator === '') {
            operation.innerHTML = '&nbsp;';
        } else {
            operation.textContent += numberButtons[i].textContent;
        }
    });
}

const operators = document.querySelectorAll('.operator');

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', () => {
        if (operator === '/' && result.textContent === '0') {
            result.textContent = 'you cant devide by 0';
            const btns = document.querySelectorAll('.btn');
            for (let i = 0; i < btns.length; i++) {
                if (!btns[i].classList.contains('clear')) {
                    btns[i].setAttribute('disabled', 'disabled');
                }
            }
            return;
        }

        if (operator !== '' && firstNumber !== '' && secondNumber !== '') {
            secondNumber = roundToTwo(parseFloat(result.textContent));
            let rs = operate(operator, firstNumber, secondNumber);
            firstNumber = rs;
            operator = operators[i].textContent;
            operation.textContent = firstNumber + operator;
            result.innerHTML = firstNumber;
            value = '';
        }

        if (operator === '') {
            firstNumber = roundToTwo(parseFloat(result.textContent));
            operator = operators[i].textContent;
            operation.textContent = firstNumber + operator;
            value = '';
        }
    });
}

const equals = document.querySelector('.equals');

equals.addEventListener('click', () => {
    if (operator === '/' && result.textContent === '0') {
        result.textContent = 'you cant devide by 0';
        const btns = document.querySelectorAll('.btn');
        for (let i = 0; i < btns.length; i++) {
            if (!btns[i].classList.contains('clear')) {
                btns[i].setAttribute('disabled', 'disabled');
            }
        }
        return;
    }

    if (operator !== '') {
        secondNumber = roundToTwo(parseFloat(result.textContent));
        result.textContent = roundToTwo(operate(operator, firstNumber, secondNumber));
        operation.textContent = firstNumber + operator + secondNumber + ' = ';
        operator = '';
        value = '';
    }
})

const clear = document.querySelector('.clear');

clear.addEventListener('click', restart)

function restart() {
    firstNumber = 0;
    secondNumber = undefined;
    result.textContent = 0;
    operation.innerHTML = '&nbsp;';
    operator = '';

    const btns = document.querySelectorAll('.btn');
    for (let i = 0; i < btns.length; i++) {
        btns[i].removeAttribute('disabled');
    }

}

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}