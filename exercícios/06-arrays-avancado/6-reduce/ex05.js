//Exercício 5: Agrupar um array de objetos por um valor de propriedade
const people = [
    {name:'Alice', age: 25},
    {name:'Bob', age: 30},
    {name:'Charlie', age: 35},
    {name:'David', age: 25},
    {name:'Eve', age: 30},
    {name: 'Frank', age: 35},
];

const groupAge = people.reduce((accumulator, current)=>{
    const idade = current.age;
    if(!accumulator[idade]){
        accumulator[idade] = [];
    }  
    accumulator[idade].push(current);
    return accumulator;
}, {});


console.log(groupAge);