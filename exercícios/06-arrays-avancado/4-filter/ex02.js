/*2.	Exercício 2: Filtrando um array de objetos
Dada uma matriz de objetos que representam pessoas com propriedades de nome e idade, filtre todas as pessoas com menos de 18 anos. */

const people = [
    {name: 'Alice', age: 20},
    {name: 'Bob', age: 16},
    {name: 'Charlie', age: 18},
    {name: 'David', age: 15},
];

const menorDeIdade = people.filter((obj) => obj.age < 18);
console.log(menorDeIdade);