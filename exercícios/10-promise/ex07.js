// Exercício 07 (ex 3 métodos): Promise.all()

// Escreva uma função multipleNumbers(numbers) que receba uma matriz de números como entrada e retorne uma promessa. A promessa deve resolver com o resultado da multiplicação de todos os números juntos

function multipleNumbers(arrNumbers) {
    return new Promise((resolve, reject) => {
        resolve(arrNumbers.reduce((accumulator, current) => accumulator *= current))
    })
        .then(value => console.log(value));
}

multipleNumbers([2, 3, 4, 5]);