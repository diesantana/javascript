/*Exercício 4: Obter preços com impostos
Escreva uma função que recebe um array de preços e retorna um array de preços com um imposto de 7% usando o método map().
*/

const precos = [40, 75, 100, 90];
const imposto = precos.map(preco => preco += (preco * 0.07));
console.log(imposto);
// [ 42.8, 80.25, 107, 96.3 ]

