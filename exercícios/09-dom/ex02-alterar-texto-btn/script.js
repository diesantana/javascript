const btn = document.querySelector('#btn');
const textoPrincipal = btn.innerText;
const textoAlternativo = 'Texto alternativo';

btn.addEventListener('click', function(){
    if(btn.innerText === textoAlternativo){
        btn.innerText = textoPrincipal;
    }else{
        btn.innerText = textoAlternativo;
    }
});

