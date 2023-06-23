// Exercício 5 (ex 1 métodos): Promise.resolve()

// Escreva uma função greetUser(name) que receba um nome como entrada e retorne uma promessa que resolva com uma mensagem de saudação contendo o nome.

function greetUser(userName){
    return Promise.resolve(`Olá, ${userName}!`)
        .then((value) => console.log(value));
}

greetUser('Johny Johny');