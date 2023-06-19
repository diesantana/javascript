/*Exercício 6: Agrupar Objetos por Propriedade
Escreva uma função groupObjectsByProperty() que recebe uma matriz de objetos e um nome de propriedade e retorna um objeto em que as chaves são os valores de propriedade e os valores são matrizes de objetos que possuem esse valor de propriedade usando o método map().
*/

function groupObjectsByProperty(arrObj, propriedade){
    const gruposObj = arrObj.reduce(function (accumulator, current){
        const propriedadeValor = current[propriedade];
        if(!accumulator[propriedadeValor]){
            accumulator[propriedadeValor] = [];
        }
        accumulator[propriedadeValor].push(current);
        return accumulator;
    },{});
}

const people = [
    {name: 'John', age: 25, city: 'New York' }, // Valor atual | criar a propriedade passada por argumento
    {name: 'Jane', age: 30, city: 'Los Angeles'},
    {name: 'Jim', age: 35, city: 'Chicago'},
    {name: 'Jessica', age: 40, city: 'New York'},
    {name: 'Jack', age: 45, city: 'Los Angeles'},
    {name: 'Jill', age: 50, city: 'Chicago'},
];

console.log(groupObjectsByProperty(people));