// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnNext = document.querySelector('#btnNext');

function showPiadas(piada){
    const elementDiv = document.querySelector('.resposta');
    elementDiv.innerHTML = piada;
}

async function fetchPiadas(){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const responseJson = await response.json();
    showPiadas(responseJson.value);
}

btnNext.addEventListener('click', () => fetchPiadas())


