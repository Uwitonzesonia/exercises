var sum = 0;
for (var i = 1; i <= 1000; i++) {
    if (i %5 === 0 && i % 8 === 0) {
        sum += i;
    }
}
console.log(" the sum of all numbers between 1 and 1000 which are divisible by both 5 and 8 are:", sum);