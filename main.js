const Row = 7;
for (let i = 1; i <= Row; i++){
    let pattern = '';
    for (j = 1; j <= i ; j++) {
        pattern+= "*"; 
    }
    console.log(pattern);
}