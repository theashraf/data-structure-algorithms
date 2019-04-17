// factorial
function fact(n) {
  if (n == 1) return 1;
  return n * fact(n - 1);
}

// console.log(fact(4));

// fibonacci series
function fab(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fab(n - 1) + fab(n - 2);
}

// console.log(fab(7));

// Greatest common divisor
// Euclidean Algorithm
// gcd(a,0) = a
// gcd(a,b) = gcd( b , a%b);
function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

// console.log(gcd(48, 180));

// Write a JavaScript program to get the integers in range (x, y)
function range(x, y) {
  if (x == y) return [y];
  return [x + 1, ...range(x + 1, y)];
}

// console.log(range(2, 9));

// Write a JavaScript program to compute the sum of an array of integers
function sum(arr) {
  if (arr.length === 1) return arr[0];
  return sum([...arr.slice(1)]) + arr[0];
}

// console.log(sum([1, 2, 3, 4, 5, 1]));

// a to the power n
function power(a, n) {
  if (n == 0) return 1;
  return a * power(a, n - 1);
}

// console.log(power(2, 10));

// check if a number is even or not
function isEven(n) {
  if (n == 0) return true;
  if (n == 1) return false;
  return isEven(n - 2);
}

// console.log(isEven(103));
