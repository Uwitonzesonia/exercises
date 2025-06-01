const kelvin = 0;// kevin will not be changed , const kelvin = 293Add commentMore actions
const celsius = kelvin - 273 ;//  celsius will not changed . const celsius = kelvin - 273 ;
 let Fahrenheit = celsius * (9 / 5) + 32; // fahrenheit can be changed . let fahrenheit = celsius * (9 / 5) + 32 ;
Fahrenheit = Math.floor(Fahrenheit);// fahrenheit will come in decimal numbers
console.log (`The temperature is ${Fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);