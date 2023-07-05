// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

async function fetchBtn(){
    const btcRequest = await fetch('https://blockchain.info/ticker');
    const btcJson = await  btcRequest.json();
    const valorBrl = ('R$ '+ btcJson.BRL.buy).replace('.', ',');
    btcDisplay(valorBrl);
}

function btcDisplay(btcValue){
    const btcSpan = document.querySelector('.resposta');
    btcSpan.innerText = btcValue;
}

// setInterval(fetchBtn, 1000 * 30);
fetchBtn();
