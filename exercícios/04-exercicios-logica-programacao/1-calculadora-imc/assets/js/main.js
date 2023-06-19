let form = document.querySelector('.form-imc');

// addEventListener captura o submit

form.addEventListener('submit', function(e) {    // 'e' ou 'event' ou 'evento'
    e.preventDefault();     // previne o envio 
    const inputPeso = e.target.querySelector('#input-peso');    // Input peso em uma const
    const inputAltura = e.target.querySelector('#input-altura');    // Input altura em uma const
    const peso = Number(inputPeso.value);       // valor do input peso em uma const
    const altura = Number(inputAltura.value);   // valor do input altura em uma const
    if (!peso){ // !peso = peso não é true?
        setResultado('Peso inválido', false);
        return;
    }
    if(!altura){    // !altura = altura não é true?
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);   // inserindo o calculo imc Na const imc 
    const msg = getNivelImc(imc);       // getNivelImc, o parametro é o valor da const imc 
    setResultado(msg, true);                  // const msg vai para o resultado no HTML.

});

 // função que calcula o IMC
function getImc(peso, altura) {
    const imc = peso / altura ** 2; // formula IMC
    return imc.toFixed(2);  // retornando a const imc com duas casas decimais
}

function getNivelImc(imc){
    if (imc < 18.5){
        return `Seu IMC é ${imc} (Abaixo do peso)`; 
    } else if (imc >= 18.5 && imc < 25){
        return `Seu IMC é ${imc} (Peso normal)`;
    } else if(imc >= 25 && imc < 30){
        return `Seu IMC é ${imc} (Sobrepeso)`;
    } else if (imc >= 30 && imc < 35){
        return `Seu IMC é ${imc} (Obesidade grau 1)`;
    } else if(imc >= 30 && imc < 40){
        return `Seu IMC é ${imc} (Obesidade grau 2)`;
    } else if (imc >= 40){
        return `Seu IMC é ${imc} (Obesidade grau 3)`;
    }
}


function criaP() {
    const p = document.createElement('p');
    return p; 
}

function setResultado(msg, isValid){
    let resultado = document.querySelector('#resultado'); // let resultado = div resultado
    resultado.innerHTML = '';   // Limpando o conteúdo HTML
    const p = criaP();          // Criando o <p> dentro da const p
    
    if(isValid){
        p.classList.add('paragrafo-resultado');    // se true essa classe
    } else{
        p.classList.add('paragrafo-resultado-red'); // se false a classe red
    }

    p.innerHTML = msg;          // Inserindo conteúdo dentro do p
    resultado.appendChild(p);   // Criando o p dentro do HTML 
}

