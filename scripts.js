const numberBtns = document.querySelectorAll('button');
const AC = document.getElementById("AC");
const minus = document.getElementById("+/-");
const perc = document.getElementById("%");
const slash = document.getElementById("/");
const mult = document.getElementById("*");
const plus = document.getElementById("+");
const dot = document.getElementById(".");
const operateBtn = document.getElementById("=");
const subtrBtn = document.getElementById("-");
const screen = document.querySelector("screen");
const input = document.getElementById("input");
let inputNumber = 0;

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

function power(a, b) {
	return Math.pow(a, b);
};

function factorial(x) {
	let arr = [];
  if (x == 0 || x == 1) {
    return 1;
  } else {
    return arr[x] = factorial(x-1) * x;
  }
};

function operate (x, operator, y) {
  if (operator == "+") {
return add(x, y);
} if (operator == "-") {
  return subtract(x, y);
} if (operator == "*") {
  return multiply(x, y);
} if (operator == "/") {
  return divide(x, y);
}
};

numberBtns.forEach((button) => {
  button.addEventListener('click', addNumber);
})
numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    showNumber(inputNumber);
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

operateBtn.addEventListener('click', operate);

dot.addEventListener('click', addNumber);
dot.addEventListener('click', showNumber);

mult.addEventListener('click', chooseOperator);
plus.addEventListener('click', chooseOperator);
subtrBtn.addEventListener('click', chooseOperator);
slash.addEventListener('click', chooseOperator);


function chooseOperator() {
  let x = inputNumber;
  if(button.value === "+") {
    operator = "+"
  } if (button.value === "-") {
    operator = "-"
  } if (button.value === "/") {
    operator = "/"
  } if (button.value === "*") {
    operator = "*"
  }
  return operator;
}