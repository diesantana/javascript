// Exercícios da aula

// Retorne os numeros maiores que 10

const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const maiorQueDez = num.filter(elemento => elemento > 10);
//console.log(maiorQueDez);

const people = [
    {name: 'Luiz', age: 62},
    {name: 'Maria', age: 23},
    {name: 'Eduardo', age: 55},
    {name: 'Leticia', age: 19},
    {name: 'Rosana', age: 32},
    {name: 'Wallace', age: 47},
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
const fiveLetters = people.filter(obj => obj.name.length >= 5);


// Retorne as pessoas com mais 50 anos
const senior = people.filter((obj) => obj.age > 50);

// Retorne as pessoas cujo nome termina com 'a'
const terminaComA = people.filter((obj) => obj.name.toLowerCase().endsWith('a'));

console.log(terminaComA);
