async function request(url) {
   try {
      const response = await fetch(url);
      if (!response.ok) {
         throw new Error(`OOPS! Temos um erro: ${response.status}`);
      }
      const dataText = await response.text();
      getDados(dataText);  
   } catch (error) {
      console.log(error);
   }
}

// Exibe os dados na página
function getDados(dados) {
   const div = document.querySelector('.conteudo-pag');
   div.innerHTML = dados;
}

// Pegando o clique nos links
document.addEventListener('click', event => {
   let element = event.target;
   let tagName = element.tagName.toLowerCase();
   // verificando se o elemento clicado é um <a>
   if (tagName === 'a') {
      event.preventDefault();
      // pegando o valor do atributo href do link clicado 
      let href = element.getAttribute('href')
      // chamando a função que vai fazer a requisição
      request(href);
   }
})



