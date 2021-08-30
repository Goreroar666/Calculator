const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const AC = document.getElementById("AC");
const minus = document.getElementById("+/-");
const perc = document.getElementById("%");
const slash = document.getElementById("/");
const mult = document.getElementById("*");
const plus = document.getElementById("+");
const dot = document.getElementById(".");
const operateBtn = document.getElementById("=");
const subtrBtn = document.getElementById("-");

let screenArray = [];

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

one.addEventListener('click', )