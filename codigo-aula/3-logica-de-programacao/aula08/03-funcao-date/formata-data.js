function zeroAesquerda(num){
    return num < 10 ? `0${num}`: num;
}
function formataData(data){
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth() +1); // mês recebe +1  (Jan 1 e Dez 12)
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());
    const seg = zeroAesquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date('2015-07-08 17:15:00'); // data específica
dataFormatada = formataData(data);
console.log(dataFormatada);
// 08/07/2015 17:15:00


