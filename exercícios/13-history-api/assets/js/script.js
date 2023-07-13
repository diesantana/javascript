const links = document.querySelectorAll('a');

// Função que vai fazer a requisição
async function fetchpage(url){
    const request = await fetch(url);
    const respostaText = await request.text();
    replaceContent(respostaText);
}

// Função que vai alterar o conteúdo 
function replaceContent(conteudoText){
    // Criando um elemento HTML para armazenar o novo conteúdo
    const newHtml = document.createElement('div');
    newHtml.innerHTML = conteudoText;
    // Selecionando a div que contém a classe .content
    const oldContent = document.querySelector('.content');
    // Alterando o title da página dinamicamente
    document.title = newHtml.querySelector('title').innerHTML;
    // Alterando o conteúdo da página 
    const newContent = newHtml.querySelector('.content');
    oldContent.innerHTML = newContent.innerHTML;
}

// Manipulando o evento de click 
function handleClick(evento){
    // Previnindo o padrão dos links 
    evento.preventDefault();
    // Pegando a URL do link clicado
    let url = evento.target.href;
    // Alterando A URL sem recarregar a página
    const history = window.history;
    history.pushState(null, null, url);
    // Passando a URL para a função que fará a requisição
    fetchpage(url);
}

// Atualiza dinamicamente ao clicar no botão de back e forward
window.addEventListener('popstate', () => {
    fetchpage(window.location.href);
})

links.forEach(link => link.addEventListener('click', handleClick));