// Exercício 1: Saudação atrasada
// Crie uma função assíncrona atrasadaGreeting que usa um nome como entrada e atrasa a mensagem de saudação em 3 segundos. A função deve retornar uma promessa que resolve com a mensagem de saudação

function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

async function saudacaoAtrasada(userName){
    await delay(3000);
    return `Olá ${userName}! Bem vindo ao mundo da programação assíncrona`;
}

async function executaSaudacao() {
    try{
        const mensagem = await saudacaoAtrasada('John');
        console.log(mensagem);
    }catch(error){
        console.log('Erro:', error);
    }
}

executaSaudacao();