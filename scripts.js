const numberBtns = document.querySelectorAll('.numberButtons');
const AC = document.getElementById("AC");
const minus = document.getElementById("+/-");
const dot = document.getElementById(".");
const operateBtn = document.getElementById("operateBtn");
const screen = document.querySelector("screen");
const input = document.getElementById("input");
/* const operateBtns = document.querySelectorAll(".operateBtns");
 */
let inputNumber = "";
const plus = document.getElementById("+");

function add(x, y) {
	return x + y;
};

function subtract(x, y) {
	return x - y;
};

function multiply(x, y) {
return x * y;
};

function divide(x, y) {
    return x / y;
};

function operate (x, operator, y) {
  if (operator === "+") {
return add(x, y);
} if (operator === "-") {
  return subtract(x, y);
} if (operator === "*") {
  return multiply(x, y);
} if (operator === "/") {
  return divide(x, y);
}
};

numberBtns.forEach((button) => {
  button.addEventListener('click', addNumber);
})
numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    showNumber(inputNumber);
    console.log(inputNumber)
  })
})

function addNumber(button) {
  inputNumber += button.target.value;
  return inputNumber;
}

function showNumber(x) {
if (x) x = x.slice(1);
input.textContent = x;
}
AC.addEventListener('click', function() {
  input.textContent = 0;
  inputNumber = 0;
})

dot.addEventListener('click', addNumber);
dot.addEventListener('click', showNumber);

/* function chooseOperator() {
  let operator = "";
  if(operateBtns.value = "+") {
    operator = "+";
  } if (operateBtns.value = "-") {
    operator = "-";
  } if (operateBtns.value = "/") {
    operator = "/";
  } if (operateBtns.value = "*") {
    operator = "*";
  }
  return operator;
};

operateBtns.forEach((button) => {
  button.addEventListener('click', chooseOperator)
}); */




/* let x = inputNumber;
let operator = chooseOperator();
let y = inputNumber;

operateBtn.addEventListener('click', function() {
let x = inputNumber;
let operator = chooseOperator();
let y = inputNumber;
  let result = operate();
  operate(x, operator, y);
  return result;
});
//branch commit */

operateBtn.addEventListener('click', function() {
  let x = Number(inputNumber);
  let y = Number(inputNumber);
  let operator = "+";
  let result = operate(x, operator, y)
  operate();
  console.log(result);
  input.textContent = result;
  });
  
  
  
  plus.addEventListener('click', function() {
  let operator = "+";
  console.log(operator);
  });