/*Exercício 2: Converter Temperaturas
Escreva uma função que receba um array de temperaturas em Celsius e retorne um array de temperaturas em Fahrenheit usando o método map().
*/

// Formula de conversão: F = C x 1,8 + 32
// onde F = Fahrenheit e C = Celsius

let celcius = [18, 27, 37, 20]; 

let fahrenheit = celcius.map(grau => (grau * 1.8 + 32).toFixed(1));
console.log(fahrenheit);
// [ '64.4', '80.6', '98.6', '68.0' ]