/*Exercício 3: Colocar Nomes em Maiúsculas
Escreva uma função que receba um array de nomes e retorne um array de nomes em letras maiúsculas usando o método map().
*/

const nomes = ['Maria', 'José', 'John', 'Bob'];
const maiusculas = nomes.map( nome => nome.toUpperCase());
console.log(maiusculas);
// [ 'MARIA', 'JOSÉ', 'JOHN', 'BOB' ]