// Exercício 2: Escreva uma função que receba um Date objeto como parâmetro e determine se ele cai em um final de semana (sábado ou domingo).

function finalDeSemana(objDate){
    if(objDate.getDay() === 0 || objDate.getDay() === 6){
        return true;
    }
    return false;
}

const data = new Date(2023, 5, 3);
console.log(`É final de semana: ${finalDeSemana(data)}`);