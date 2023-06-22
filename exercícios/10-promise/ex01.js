// Exercício 1:
// Instrução: Crie uma função assíncrona chamada fetchData que simule a busca de dados de um servidor remoto. A função deve retornar uma promessa que resolve após 2 segundos com uma mensagem de sucesso contendo os dados recebidos. Implemente a função e use-a para exibir a mensagem de sucesso no console.

function fetchData(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Dados carregados com sucesso');
        }, 2000);
    }).then((value) => console.log(value));
}
fetchData();
