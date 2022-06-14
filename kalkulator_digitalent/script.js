

const calculatorScreen = document.querySelector('.calculator-screen');



const updateScreen = (number) => {
    calculatorScreen.value = number
}


const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value);
    });
}
)

let prevNumber = '';
let calculationOperator = '';
let curretNumber = '0';

const inputNumber = (number) => {
    if (curretNumber === '0') {
        curretNumber = number;
    } else {
        curretNumber += number;
    }

}
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(curretNumber);
    });
})

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})
const inputOperator = (operator) => {
    prevNumber = curretNumber;
    calculationOperator = operator;
    curretNumber = '';
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(curretNumber);
})

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseInt(prevNumber) + parseInt(curretNumber);
            break;
        case "-":
            result = parseInt(prevNumber) - parseInt(curretNumber);
            break;
        case "*":
            result = parseInt(prevNumber) * parseInt(curretNumber);
            break;
        case "/":
            result = parseInt(prevNumber) / parseInt(curretNumber);
            break;
        default:
            break;
    }
    curretNumber = result;
    calculationOperator = '';
}



