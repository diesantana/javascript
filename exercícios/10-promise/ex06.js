// Exercício 5 (ex 2 métodos): Promise.reject()

// Escreva uma função divideNumbers(a, b) que receba dois números a e b como entrada e retorne uma promessa. Se b for zero, a promessa deve ser rejeitada com uma mensagem de erro 'Não é possível dividir por zero'. Caso contrário, a promessa deve resolver com o resultado da divisão de a por b.

function divideNumbers(a, b) {
    if (b === 0) {
        return Promise.reject(`Não é possível dividir por ${b}`)
    } else {
        return Promise.resolve(a / b)
            .then((result) => console.log(result));
    }
}

divideNumbers(100, 10);