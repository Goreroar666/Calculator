const numberBtns = document.querySelectorAll('.numberButtons');
const AC = document.getElementById("AC");
const negative = document.getElementById("negative");
const dot = document.getElementById(".");
const operateBtn = document.getElementById("operateBtn");
const screen = document.querySelector("screen");
const input = document.getElementById("input");
const previous = document.getElementById("numberOneAndOperator");
const operateBtns = document.querySelectorAll(".operateBtns");
const plus = document.getElementById("+");
const backSpace = document.getElementById("backSpace");
let inputNumber = '';

numberBtns.forEach((button) => {
  button.addEventListener('click', addNumber);
})
numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    showNumber(inputNumber);
  })
});

dot.addEventListener('click', checkDot);
negative.addEventListener('click', minus);
backSpace.addEventListener('click', backspace);
AC.addEventListener('click', function() {
  input.textContent = 0;
  inputNumber = '';
  previous.textContent = '';
  operator = '';
});

operateBtns.forEach((button) => {
  button.addEventListener('click', () => {
    let operator = button.value;
    calculate();
    inputNumber = parseFloat(input.textContent);
    if(input.textContent.includes(inputNumber)) {
      previous.textContent = `${inputNumber} ${operator}`;
    } 
    inputNumber = '';
    input.textContent = '';
  })
}); 

function addNumber(button) {
  inputNumber += button.target.innerText;
  return inputNumber;
};

function showNumber(x) {
input.textContent = x;
}
function checkDot() {
  if(inputNumber.includes(".")) return;
  if(inputNumber === '') {
    inputNumber = 0;
  }
  inputNumber += '.';
};

function backspace() {
  input.textContent = input.textContent.toString().slice(0,-1);
};

function minus() {
  if (parseFloat(input.textContent) > 0) {
    input.textContent = -Math.abs(input.textContent);
    return;
  } else if (parseFloat(input.textContent) < 0) {
    input.textContent = Math.abs(input.textContent);
    return;
  }
}

operateBtn.addEventListener('click', function() {
  let x = parseFloat(previous.textContent);
  let y = parseFloat(inputNumber);
  let operator = chooseOperator();
  let result = operate(x, operator, y)
  if(previous.textContent === '' || inputNumber === '') {
    return;
  }
  operate();
  previous.textContent = `${x} ${operator} ${y} =`;
  input.textContent = Math.round(result*100)/100;
  });
  
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

function calculate() {
  let x = parseFloat(previous.textContent);
  let y = parseFloat(input.textContent);
  if(previous.textContent === '' || input.textContent === '') {
    return;
  } if(previous.textContent.includes("=")) {
    return;
  } 
  else if (previous.textContent.includes("+")) {
    input.textContent = add(x, y);
    previous.textContent = '';
    operator = '';
    inputNumber = '';
  } if (previous.textContent.includes("-")) {
    input.textContent = subtract(x, y);
    previous.textContent = '';
    operator = '';
    inputNumber = '';
  } if (previous.textContent.includes("/")) {
    input.textContent = divide(x, y);
    previous.textContent = '';
      operator = '';
      inputNumber = '';
   } if (previous.textContent.includes("*")) {
      input.textContent = multiply(x,y);
      previous.textContent = '';
      operator = '';
      inputNumber = '';
    }
  };

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
  } if (operator === "/" && y === 0) {
    return "Can't divide by 0.";
  }};
  