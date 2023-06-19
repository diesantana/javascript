function getHora(){
    let data = new Date();
    return data.toLocaleTimeString();
} 
// 20:59:09

let hora = setInterval(function(){
    console.log(getHora());
}, 1000);

setTimeout(function(){
    clearInterval(hora);
}, 5000);




