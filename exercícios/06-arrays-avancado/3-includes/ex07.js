//7.	Exercício 7: Verifique se uma string contém uma substring
const str = 'Hello, world!';
console.log(str.toLowerCase().includes('world'));
// true
console.log(str.toLowerCase().includes('hello'));
// true
console.log(str.toLowerCase().includes('Hello'));
// false
console.log(str.includes('Hello'));
// true