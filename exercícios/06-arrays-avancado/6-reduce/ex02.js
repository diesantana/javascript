//Exercício 2: Contar o número de ocorrências de cada elemento em um array (Quantas vezes cada elemento se repete)

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'orange'];

const ocorrencias = fruits.reduce((accumulator, current)=>{
    if(accumulator[current]){  
        accumulator[current]++;
    }else{
        accumulator[current] = 1;
    }
    return accumulator;
}, {});

console.log(ocorrencias);