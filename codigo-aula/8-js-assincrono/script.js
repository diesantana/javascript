// Criar uma função que gera um numero aleatório 
function randomNum(minSegundos, maxSegundos){
    let min = minSegundos * 1000;
    let max = maxSegundos * 1000;
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}


function espera(msg, tempo){
    setTimeout(() => {
        console.log(msg);
    }, tempo);
}

espera('Hello word!', 1000);
espera('Hello word!', 3000);