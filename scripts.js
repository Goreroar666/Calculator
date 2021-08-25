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