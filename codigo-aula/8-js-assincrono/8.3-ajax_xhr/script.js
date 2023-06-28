// criando uma instância do XHR
const xhr = new XMLHttpRequest();
console.log(xhr);
const method = 'GET' // ou 'POST', 'PUT', 'DELETE'...
const url = 'https://example.com/api/data';

xhr.open(method, url, true); // true (padrão) para solicitações assíncronas


// manipulando a resposta
xhr.onreadystatechange = () => {
    // processar a resposta do servidor 
}

