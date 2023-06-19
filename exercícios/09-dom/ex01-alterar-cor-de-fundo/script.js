// Pegar o botão  
const btn = document.querySelector('#colorBtn'); 
const body = document.body; // pega o body 
// const body = btn.parentElement; // pega o elemento pai 

function corDeFundo(){
    if(body.classList.contains('bakcgroundcolor-red')){
        body.classList.remove('bakcgroundcolor-red');
        btn.innerText = 'Alterar a cor';
    }else{
        body.classList.add('bakcgroundcolor-red');
        btn.innerText = 'Desfazer';
    }
}

btn.addEventListener('click', corDeFundo);