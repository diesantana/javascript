// async
function boaTarde() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Boa tarde!')
            resolve()
        }, 2000);
    })
}
async function myFunction() {
    console.log('Bom dia!');
    await boaTarde();
    console.log('Boa noite!');
}

myFunction();

// Tratando erros com try/catch 
// async function myFunction() {
//     try {
//         console.log('Bom dia!');
//         await boaTarde();
//         // o código aqui é executado após a conclusão da promise
//         console.log('Boa noite!');
//     } catch (error) {
//         // handle the error
//         console.log('Ops! Temos um erro: ', error);
//     }
// }

// encadeando um catch 
// myFunction()
//     .catch((error) => console.log('Ops, temos um erro'. error));
