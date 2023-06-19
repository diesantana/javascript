//Exercício 3: Dado um array de strings, crie um novo array que contenha apenas as strings que tenham mais de dois caracteres e comece com a letra 'A'. Em seguida, retorne a concatenação de todas as strings do novo array, separadas por um espaço.

//Exemplo de entrada: const words = ["apple", "orange", "banana", "art", "aim", "abrupt", "car"]

// Saída esperada: "apple art aim abrupt"  

const words = ['apple', 'orange', 'banana', 'art', 'aim', 'abrupt', 'car'];

const str = words.filter(valor => valor.length >= 3 && valor.toLowerCase().startsWith('a')).join(' ');

console.log(str); 
// apple art aim abrupt
