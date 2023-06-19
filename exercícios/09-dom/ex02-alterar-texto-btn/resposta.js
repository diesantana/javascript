// Solução 
var toggleButton = document.getElementById('toggleButton');
var textElement = document.getElementById('textElement');
var initialText = textElement.innerText;
var alternateText = 'Alternate Text';

toggleButton.addEventListener('click', function() {
  if (textElement.innerText === initialText) {
    textElement.innerText = alternateText;
  } else {
    textElement.innerText = initialText;
  }
});

// Explicação:

// Obtemos referências ao elemento de botão e ao elemento de texto usando getElementById.
// Armazenamos o texto inicial do elemento de texto em uma variável chamada initialText.
// Definimos o texto alternativo para o qual queremos alternar como uma string na alternateTextvariável.
// Adicionamos um ouvinte de evento ao botão que escuta o 'click'evento.
// Dentro da função event listener, verificamos o texto atual do elemento text usando a innerTextpropriedade.
// Se o texto for igual a initialText, atualizamos o texto do elemento de texto para alternateText. Caso contrário, se o texto já for o alternateText, nós o configuramos de volta para o initialText.