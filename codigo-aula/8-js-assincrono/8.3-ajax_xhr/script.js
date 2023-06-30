// criando uma instância do XHR
const xhr = new XMLHttpRequest();
xhr.responseText = 'json';
console.log(xhr);
const method = 'GET' // ou 'POST', 'PUT', 'DELETE'...
const url = 'https://example.com/api/data';

xhr.open(method, url, true); // true (padrão) para solicitações assíncronas


// manipulando a resposta
xhr.onreadystatechange = () => {
    if (xhr.status === 200) {
        // perfect!
    } else {
        // Houve um problema com o pedido,
        // por exemplo a resposta pode conter um 404 (Not Found)
        // ou código de resposta 500 (erro interno do servidor)
    }
}



