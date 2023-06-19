// Solução 
var toggleButton = document.getElementById('toggleButton');
var targetElement = document.getElementById('targetElement');

toggleButton.addEventListener('click', function() {
  if (targetElement.style.display === 'none') {
    targetElement.style.display = 'block';
  } else {
    targetElement.style.display = 'none';
  }
});


// Explicação:

// Obtemos referências ao elemento de botão e ao elemento de destino usando getElementById.
// Inicialmente, ocultamos o elemento de destino definindo sua displaypropriedade como 'none'em CSS.
// Adicionamos um ouvinte de evento ao botão que escuta o 'click'evento.
// Dentro da função event listener, verificamos o valor atual da displaypropriedade do elemento alvo.
// Se a propriedade display for 'none', nós a configuramos 'block'para mostrar o elemento. Caso contrário, se a propriedade display já for 'block', vamos defini-la de volta 'none'para ocultar o elemento.
// Esses exercícios devem fornecer alguma prática na aplicação de conceitos de HTML, CSS e JavaScript. Sinta-se à vontade para modificá-los e experimentar mais para aprimorar suas habilidades.  