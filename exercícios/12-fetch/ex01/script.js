// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

async function request(cep) {
    const cepTarget = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const resposta = await cepTarget.json();
    getCep(resposta.logradouro);
}

function getCep(cepJson){
    const elementoHTML = document.querySelector('.resposta');
    elementoHTML.innerHTML = cepJson;
}

document.addEventListener('submit', evento => {
    evento.preventDefault();
    const inputCep = document.querySelector('input');
    const inputcepValue = inputCep.value;
    request(inputcepValue);
});

