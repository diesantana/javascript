// Obtenha o elemento ao qual deseja adicionar um ouvinte de evento
const buttonIniciar = document.querySelector('.btn-iniciar');

// Adicione o ouvinte de evento ao elemento e crie uma função que trata o evento
buttonIniciar.addEventListener('click', function(e){
    alert('Botão clicado');
});


