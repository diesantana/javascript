const people = [
    {name: 'Luiz', age: 62},
    {name: 'Maria', age: 23},
    {name: 'Eduardo', age: 55},
    {name: 'Leticia', age: 19},
    {name: 'Rosana', age: 32},
    {name: 'Wallace', age: 47}
];

// Retorne as pessoas com o nome com 5 letras ou mais 
const fiveLetters = people.filter(obj => obj.name.length >= 5);

// Retorne as pessoas com mais de 50 anos
const fiftyAge = people.filter(obj => obj.age > 50);

// Retorne as pessoas cujo nome termina com a
const letterA = people.filter(obj => obj.name.toLowerCase().endsWith('a'));
console.log(letterA); 


const terminaE = people.filter(obj => obj.name.toLowerCase().endsWith('e'));
console.log(terminaE);

