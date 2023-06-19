const nome = prompt('Digite o seu nome completo:');
document.body.innerHTML = `Olá <strong>${nome}</strong>! <br/>`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> caracteres <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong> <br/>`;
document.body.innerHTML += `Qual primeiro índice da letra \"a\" do seu nome: <strong>${nome.indexOf('a')}</strong> <br/>`
document.body.innerHTML += `Qual o último índice da letra "a" do seu nome: <strong>${nome.lastIndexOf('a')}</strong> <br/>`; 
document.body.innerHTML += `As últimas três letras do seu nome são: <strong>${nome.slice(-3)}</strong> <br/>`; 
document.body.innerHTML += `As palavras do seu nome são <strong>${nome.split(' ')}</strong> <br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong> <br/>`;
document.body.innerHTML += `Seu nome com letras minúsculas <strong>${nome.toLowerCase()}</strong> <br/>`;

