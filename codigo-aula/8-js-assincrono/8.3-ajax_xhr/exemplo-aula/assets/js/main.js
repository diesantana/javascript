let div = document.querySelector('.conteudo-pag');
document.addEventListener('click', event => {
    let element = event.target;
    let tagName = element.tagName.toLowerCase();
    if (tagName === 'a') {
        // Previnindo o comportamento do link
        event.preventDefault();
        // pegando o valor do href clicado 
        let href = element.getAttribute('href');
        // Chamando a função que vai fazer o AJAX
        request(href);
    }
})

// Função que vai fazer a requisição
function request(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if (xhr.status === 200) {
                const resposta = xhr.response;
                div.innerHTML = resposta;
            }else{
                console.log(xhr.status);
            }
        }
    };
    xhr.send();
}
