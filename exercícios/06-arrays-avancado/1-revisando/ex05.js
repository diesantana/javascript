// 5.	Escreva uma função que receba um array de objetos, cada um contendo uma propriedade name, e retorne um array dos nomes.

function retornaNomes(arr) {
    let names = [];
    for( objetos of arr){
        names.push(objetos.name);
    }
    return names;
}

const people = [
    {name: 'John', age: 30},
    {name: 'Maria', age: 20},
    {name: 'Francisco', age: 70},
    {name: 'Jose', age: 17}
]

console.log(retornaNomes(people));