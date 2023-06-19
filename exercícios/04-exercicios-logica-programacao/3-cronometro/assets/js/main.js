function timer(){
// Função que vai criar a contagem
function getTimer(seconds){
    const data = new Date(seconds *1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC' // GMT 
    });
}

// Obtenha o elemento ao qual deseja adicionar um escutador de eventos
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.btn-iniciar'); 
const pausar = document.querySelector('.btn-pausar'); 
const zerar = document.querySelector('.btn-zerar'); 
// Variável que armazenara os segundos
let segundos = 0;
// Variável que armazenará o setInterval
let timer;

// Função que incia a contagem do timer
function iniciaTimer(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = getTimer(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
    let elementoClicado = e.target;
    if(elementoClicado.classList.contains('btn-iniciar')){
        clearInterval(timer);
        relogio.classList.remove('pausado');
        iniciaTimer();
        iniciar.innerHTML = 'Iniciar';
    };
    if(elementoClicado.classList.contains('btn-pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
        iniciar.innerHTML = 'Continuar';
    };
    if(elementoClicado.classList.contains('btn-zerar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        iniciar.innerHTML = 'Iniciar';
    };
});
// 01/01/1970 = new Date(0)
}
timer();

