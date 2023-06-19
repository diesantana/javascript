const divParagrafos = document.querySelector('.div-paragrafos');
const paragrafos = divParagrafos.querySelectorAll('p');
paragrafos[0].style.color = 'Qualquer cor'

const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;

for (let indice of paragrafos){
    indice.style.backgroundColor = backgroundBody;
    indice.style.color = 'white';
}

