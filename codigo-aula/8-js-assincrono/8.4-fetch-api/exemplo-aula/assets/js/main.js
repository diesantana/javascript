// function request(url) {
//     fetch(url)
//         .then(response => {
//             if(!response.ok){
//                 throw new Error(`HTTP error! Status: ${response.status}`)
//             }
//             return response.text()
//         })
//         .then(dados => getDados(dados))
//         .catch(error => console.log(error));
// }

async function request(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseText = await response.text();
        getDados(responseText);
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener('click', event => {
    let element = event.target;
    let tagName = element.tagName.toLowerCase();
    if (tagName === 'a') {
        event.preventDefault();
        let href = element.getAttribute('href');
        request(href);
    }
})

function getDados(dados) {
    let div = document.querySelector('.conteudo-pag');
    div.innerHTML = dados;
}
