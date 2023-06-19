// Exercício 4: Dado um array de objetos representando pessoas, retorne um novo array com os nomes de todas as pessoas maiores de 18 anos.

/*Exemplo de entrada: 
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 16 },
  { name: "Bob", age: 20 },
  { name: "Mary", age: 19 },
  { name: "Tom", age: 30 },
];*/

// Saída esperada: ["John", "Bob", "Mary", "Tom"]

const people = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 15},
    {name: 'Bob', age: 20},
    {name: 'Mary', age: 19},
    {name: 'Tom', age: 30},
];

const over18 = people
  .filter(obj => obj.age > 18)
  .map(obj => obj.name);

console.log(over18);
// [ 'John', 'Bob', 'Mary', 'Tom' ]