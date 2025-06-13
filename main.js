function basicOp(operation, value1, value2){
  if (operation === '+'){
    return value1 + value2;
  } else if (operation === '-'){
    return value1 - value2 ;
  } else if (operation === '*'){
    return value1 * value2 ;
  } else if (operation === '/'){
    return value1 / value2 ;
  } else {
    return 'Error: invalid operation';
  }
}
console.log(basicOp('+', 43, 45));
console.log(basicOp('-', 67, 87));
console.log(basicOp('*', 43, 54));