function multiply(number) {
  const digits = number.toString().length;
  const multiplier = Math.pow(5, digits);
  return number * multiplier;
}
console.log(multiply(2));
console.log(multiply(12));
console.log(multiply(123));
console.log(multiply(9876));
