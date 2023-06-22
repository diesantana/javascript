// Criar uma função que gera um numero aleatório 
function randomNum(minSegundos, maxSegundos) {
    let min = minSegundos * 1000;
    let max = maxSegundos * 1000;
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

function espera(msg, tempo) {
    setTimeout(() => {
        console.log(msg);
    }, tempo);
}

espera('Hello word!', randomNum(1, 5));
espera('Frase 2', randomNum(1, 5));




















// encadear depois de um catch +
// const myPromise = new Promise((resolve, reject) =>{
//     console.log('Deu certo');
//     resolve();
// })

// myPromise
//     .then(() => {
//         throw new Error('Algo falhou');
//     })
//     .catch(() => {
//         console.log('Faça isso');
//     })
//     .then(() =>{
//         console.log('Faça isso o que quer que tenha acontecido antes');
//     });



