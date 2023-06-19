//Exercício 1: Encontre o valor médio de uma matriz de números

const numbers = [10, 20, 30, 40, 50];

const media = numbers.reduce((accumulator, current, index, array) => {
    accumulator += current;
    if(index === array.length -1){
        return accumulator / array.length;
    }
    return accumulator;
    
}, 0);

console.log(media);

