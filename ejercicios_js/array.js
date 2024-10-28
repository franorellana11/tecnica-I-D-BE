// JavaScript ES6: Dados los siguientes array,
// imprimir por consola los elementos del array “y”
// que no se encuentran en el array “x” utilizando
// para tal fin una única línea de código.
// const x = ["n", "bro", "c", "|"]; const y = ["d", "n", "l", "bro", "g"];

const x = ["n", "bro", "c", "|"];
const y = ["d", "n", "l", "bro", "g"];

const resultado = y.filter((index) => !x.includes(index));
console.log(resultado);
