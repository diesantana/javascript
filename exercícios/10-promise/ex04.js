// Exercício 4:
// Instrução: Crie uma função chamada 'delay' que leva um tempo em milissegundos como entrada. A função deve retornar uma promessa que resolve após o tempo de atraso especificado. Implemente a função e use-a para exibir uma mensagem após um atraso.

function delay(milissegundos){
    return new Promise((resolve, reject) => {
        setInterval(() =>{
            resolve(`Sucesso, demorou ${milissegundos / 1000} segundos`);
        }, milissegundos);
    })
    .then(value => console.log(value));
}

delay(2000);