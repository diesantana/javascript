// Exercício 2: Instrução de Filtragem de Valores: Escreva uma função que receba uma matriz de números como entrada e retorne um novo objeto Map contendo apenas os números positivos como chaves e seus quadrados como valores.

// Entrada: [-2, 3, -5, 7, 0, 8]

// Saida : Map(3) { 3 => 9, 7 => 49, 8 => 64 }

function getPositivo(input){
    const numMap = new Map()

    for(num of input){
        if(num > 0){
            numMap.set(num, num * num);
        }
    }
    return numMap;

}

// Digite a entrada aqui:
console.log(getPositivo([-2, 3, -5, 7, 0, 8]));