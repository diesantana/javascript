// ------------------- Métodos 

// all

// sintaxe
// Promise.all([promise1, promise2, promise3, ...]);

// const promise1 = Promise.resolve('Value 1');
// const promise2 = Promise.resolve('Value 2');
// const promise3 = Promise.resolve('Value 3');

// Promise.all([promise1, promise2, promise3])
//     .then(values => console.log(values)); // Output: ['Value 1', 'Value 2', 'Value 3']

function aguarde(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Valor não é uma string');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

const arrayPromises = [
    // 'Primeiro valor',
    aguarde('Promise 1', 3000),
    aguarde('Promise 2', 500), 
    aguarde('Promise 3', 1000),
    aguarde(5, 1000),
    // 'Outro valor'
];

Promise.race(arrayPromises)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
