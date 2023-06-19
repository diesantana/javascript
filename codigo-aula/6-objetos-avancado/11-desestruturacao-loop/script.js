// Desestruturação de um array em um loop 
const numbers = [1, 2, 3, 4, 5];

for(const number of numbers){
    console.log(number);
}

// Desestruturação de um array de objetos em um loop 
const users = [
    {name: 'John', age: 25},
    {name: 'Alice', age: 30},
    {name: 'Bob', age: 27},
];

for(const {name, age} of users){
    console.log(`${name} is ${age} years old.`);
}


// Desestruturação de arrays e objetos aninhados 
const matrix = [[1, 2], [3, 4], [5, 6]];

for(const [a, b] of matrix){
    console.log(`[${a}, ${b}]`);
}






