// Como cirar uma promise
// const myPromise = new Promise((resolve, reject) => {
//     // Executa operação assíncrona
//     // Se for bem-sucedido, chama resolve (resultado)
//     // Se houver um erro, chame a reject (error)
// });


// Manipulando
// const myPromise = new Promise((resolve, reject) => {
//     // Executa operação assíncrona
//     const num = 37;
//     if(num > 10){
//         resolve('Sucesso');
//     }else{
//         reject('Temos um erro');
//     }
// });





// // Criar uma função que gera um numero aleatório 
// function randomNum(minSegundos, maxSegundos) {
//     let min = minSegundos * 1000;
//     let max = maxSegundos * 1000;
//     const num = Math.floor(Math.random() * (max - min + 1) + min);
//     return num;
// }

// function espera(msg, tempo) {
//     setTimeout(() => {
//         console.log(msg);
//     }, tempo);
// }

// espera('Hello word!', randomNum(1, 5));
// espera('Frase 2', randomNum(1, 5));

// then & catch 
// myPromise
//     .then((value) => value)
//     .then(value => {
//         console.log(value);
//     })
//     .catch(value => {
//         console.log(value);
//     });

// encadeamento depois do catch 
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


// Promise.resolve(value);

// Promise.reject(reason);


const resolvedPromise = Promise.resolve('Resolved');
resolvedPromise.then(value => console.log(value)); // Output: 'Resolved'

const rejectedPromise = Promise.reject('Error occurred');
rejectedPromise.catch(error => console.log(error)); // Output: 'Error occurred'

