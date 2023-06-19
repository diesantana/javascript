let inputTarefas = document.querySelector('.input-tarefas');
let btnTarefas = document.querySelector('.btn-add-tarefas');
let ulTarefas = document.querySelector('.list-tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaBtnApagar(li){
    const btn = document.createElement('button');
    btn.innerText = 'Excluir';
    btn.setAttribute('class', 'btn-del');
    li.appendChild(btn);
}

function criaTarefas(textInput){
    const li = criaLi();
    li.innerText = textInput;
    ulTarefas.appendChild(li);
    cleanInput();
    criaBtnApagar(li);
    salveTarefas();
}

function cleanInput(){
    inputTarefas.value = '';
    inputTarefas.focus();
}

inputTarefas.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefas.value) return;
        criaTarefas(inputTarefas.value);
    }
});

btnTarefas.addEventListener('click', function(){
    if (!inputTarefas.value) return;
    criaTarefas(inputTarefas.value);
}); 

// Apagando as tarefas
document.addEventListener('click', function(e){
    const elementoClicado = e.target;
    if(elementoClicado.classList.contains('btn-del')){
        elementoClicado.parentElement.remove();
        salveTarefas();
    }
});

function salveTarefas(){
    let listTarefas = ulTarefas.querySelectorAll('li');
    let listArray = [];
    for(let indiceTarefas of listTarefas){
        let tarefasText = indiceTarefas.innerText;
        tarefasText = tarefasText.slice(0, -7);
        listArray.push(tarefasText);
        const listaTarefasJSON = JSON.stringify(listArray);
        localStorage.setItem('tarefas', listaTarefasJSON);
        
    }
}

function addTarefasSalvas(){
    if(!localStorage.getItem('tarefas')) return; // Verificando se tem algum valor em 'tarefas'
        let tarefas = localStorage.getItem('tarefas');
        let tarefasArray = JSON.parse(tarefas);
        for(let tarefa of tarefasArray){
            criaTarefas(tarefa);
        }
}
addTarefasSalvas();

