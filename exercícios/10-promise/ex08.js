// Exercício 08  (4 métodos): Promise.race()

// Escreva uma função calculateTime(numbers) que receba uma matriz de números como entrada e retorne uma promessa. A promessa deve ser resolvida com o número calculado primeiro adicionando 2 a cada número.

function calculateTime(arrNumbers){
    let arrCalculado = arrNumbers.map(element => Promise.resolve(element + 2));
    return Promise.race(arrCalculado)
        .then(value => console.log(value));
}

calculateTime([10, 5, 7, 3]);