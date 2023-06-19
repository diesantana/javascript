function meuEscopo() {
    let form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');
    let pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: Number(peso.value),
            altura: Number(altura.value)
        });

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<p/>`

        console.log(pessoas);
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();