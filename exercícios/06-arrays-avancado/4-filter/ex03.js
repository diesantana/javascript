/* 3.	Exercício 3: Filtrando um array de strings
Dada uma matriz de strings, filtre quaisquer strings que contenham a letra 'a'. */

const strings = ['apple', 'banana', 'cherry', 'orange'];
const filtered = strings.filter((str) => str.includes('a'));
console.log(filtered);