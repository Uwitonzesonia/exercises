function reverse_number (num){
    num = num + '';
    return num.split("").reverse().join("");
}
console.log(Number(reverse_number(3456)));