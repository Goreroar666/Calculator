const numberBtns = document.querySelectorAll('.numberButtons');
const AC = document.getElementById("AC");
const minus = document.getElementById("+/-");
const dot = document.getElementById(".");
const operateBtn = document.getElementById("operateBtn");
const screen = document.querySelector("screen");
const input = document.getElementById("input");
const previous = document.getElementById("numberOneAndOperator");
const operateBtns = document.querySelectorAll(".operateBtns");
const plus = document.getElementById("+");
let inputNumber = '';
let postCalc = parseInt(input.textContent,10);
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
  })
})

function addNumber(button) {
  inputNumber += button.target.value;
  return inputNumber;
}

function showNumber(x) {
input.textContent = x;
}
AC.addEventListener('click', function() {
  input.textContent = 0;
  inputNumber = '';
  previous.textContent = '';
  operator = '';
})

dot.addEventListener('click', addNumber);
dot.addEventListener('click', showNumber);

operateBtn.addEventListener('click', function() {
  let x = parseInt(previous.textContent, 10);
  let y = Number(inputNumber);
  let operator = chooseOperator();
  let result = operate(x, operator, y)
  operate();
  previous.innerText = `${x} ${operator} ${y} =`;
  input.textContent = Math.round(result*100)/100;
  console.log(result);
  console.log(inputNumber);
  return postCalc;
  });
  

  operateBtns.forEach((button) => {
    button.addEventListener('click', () => {
      let operator = button.value;
      if(input.textContent.includes(inputNumber)) {
        previous.textContent = `${inputNumber} ${operator}`;
      } 
      console.log(inputNumber);
      console.log(operator);
      inputNumber = '';
    })
  }); 
  
  //previous.textContent = `${inputNumber} ${operator}`;

  function chooseOperator() {
    let operator = "";
    if(previous.textContent.includes("+")) {
      operator = "+";
    } if(previous.textContent.includes("-")) {
      operator = "-";
    } if(previous.textContent.includes("/")){
      operator = "/";
    } if(previous.textContent.includes("*")) {
      operator = "*";
    }
  return operator;
};