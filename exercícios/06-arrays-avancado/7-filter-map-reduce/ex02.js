//Exercício 2: Dado um array de strings, retorne um novo array contendo apenas as strings com comprimento maior ou igual a 5.

//Exemplo de entrada:   const words = ["hello", "world", "the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

//Saída esperada: ["hello", "world", "quick", "brown", "jumped"]  

const words = ['hello', 'world', 'the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'];
const letterFive = words.filter(valor => valor.length >= 5);
console.log(letterFive); 
// [ 'hello', 'world', 'quick', 'brown', 'jumped' ]