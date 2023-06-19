function meuEscopo(){

    function zeroLeft(num){ // Insere um zero a esquerda em num < 10
        return num < 10? `0${num}` : num;
    }

    function getDiaSemana(dia){ // formata a dia da semana
        const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        return diasSemana[dia];
    }

    function mesName(mes){  // formata o mês
        const mesText = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return mesText[mes];
    }

    function dataBrasil(data){ // formata a data no modelo BR
        let dia = data.getDate(); 
        let diaSemana = data.getDay(); 
        let mes = data.getMonth(); 
        let ano = data.getFullYear(); 
        let hora = zeroLeft(data.getHours()); 
        let min = zeroLeft(data.getMinutes()); 
        let seg = zeroLeft(data.getSeconds());
        let diaSemanaName = getDiaSemana(diaSemana);
        let mesText = mesName(mes);
        return `${diaSemanaName}, ${dia} de ${mesText} de ${ano} ${hora}:${min}:${seg}`;
    }

    const data = new Date();
    let h1 = document.querySelector('.hora-data');
    let horaFormatada = dataBrasil(data);
    h1.innerHTML = horaFormatada;
}
meuEscopo();