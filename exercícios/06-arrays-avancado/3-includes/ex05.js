//5.	Exercício 5: Verifique se um array de objetos contém um objeto com um valor de propriedade específico
const people = [
    {name: 'Maria', age: 20},
    {name: 'Jose', age: 34},
    {name: 'John', age: 20},
    {name: 'Rony', age: 43}
];
let valor = 'Jonas';

if(people.some(elemento => elemento.name === valor)){
    console.log(`Array contém o valor '${valor}'`);
}else{
    console.log(`Array não contém o valor '${valor}'`);
}


