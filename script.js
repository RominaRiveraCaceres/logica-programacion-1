const readlineSync = require('readline-sync');

//solicitar 3 números
let num1 = parseFloat(readlineSync.question('Ingresa el primer número: '));
let num2 = parseFloat(readlineSync.question('Ingresa el segundo número: '));
let num3 = parseFloat(readlineSync.question('Ingresa el tercer número: '));

//ver que no sean iguales
if (num1 === num2 && num2 === num3) {
  console.log('Los números son iguales:', num1, num2, num3);
} else {
  // Ordenar
  let numeros = [num1, num2, num3];
  let ordenDescendente = [...numeros].sort((a, b) => b - a);
  let ordenAscendente = [...numeros].sort((a, b) => a - b);

  console.log('Ordenados de mayor a menor:', ordenDescendente.join(', '));
  console.log('Ordenados de menor a mayor:', ordenAscendente.join(', '));
}
