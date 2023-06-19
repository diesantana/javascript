// Exercício 2: Escreva uma função que receba um Date objeto como parâmetro e retorne o nome do mês completo.

function getNameMonth(objDate){
    const mesArray = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const mesName = mesArray[objDate.getMonth()];
    return mesName;
}

const currentDate = new Date();
let mesAtual = getNameMonth(currentDate);
console.log(mesAtual); // Junho
