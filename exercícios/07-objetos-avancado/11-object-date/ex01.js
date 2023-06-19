// Exercício 1: 
// Escreva uma função que receba um Dateobjeto como parâmetro e retorne o ano atual.

function getYear(objDate){
    let year = objDate.getFullYear();
    return year;
}

const currentDate = new Date();
const ano = getYear(currentDate);
console.log(ano); // 2023