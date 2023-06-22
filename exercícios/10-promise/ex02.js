// Exercício 2:
// Instrução: Crie uma função chamada calculateSum que usa uma matriz de números como entrada. A função deve retornar uma promessa que resolve com a soma de todos os números da matriz. Implemente a função e use-a para exibir a soma calculada.

function calculateSum(arrayNumeros){
    return new Promise((resolve, reject) =>{
        resolve(arrayNumeros.reduce((acumulador, currentValue) => acumulador += currentValue));
    })
    .then(value => console.log(value));
}

let numeros = [5, 15, 15];
calculateSum(numeros);
