// 705.484.450-52 | 070.987.720-03
// /[^\d]/g - Verifica valorores não númericos (0-9). 
// /^(.)\1*$/ - Verifica sequência de um número repetido. 

const cpf1 = '705.484.450-52'
const cpf2 = '070.987.720-03'

function validarCPF(cpf){
    let cpfLimpo = cpf.replace(/[^\d]/g, '');
    let valid = 'CPF válido';
    let invalid = 'CPF inválido';
    // Primeira verificação 
    if(cpfLimpo.length !== 11 || 
    typeof cpfLimpo === 'undefined' || 
    cpfLimpo === '00000000000' ||
    cpfLimpo === '11111111111' ||
    cpfLimpo === '22222222222' ||
    cpfLimpo === '33333333333' ||
    cpfLimpo === '44444444444' ||
    cpfLimpo === '55555555555' ||
    cpfLimpo === '66666666666' ||
    cpfLimpo === '77777777777' ||
    cpfLimpo === '88888888888' ||
    cpfLimpo === '99999999999') return invalid;

    // Convetendo o CPF para um array e convertendo cada índice do array para number. 
    const digitos = cpfLimpo.split('').map(Number);

    // Verificando o primeiro dígito
    let soma = 0;
    for(let i = 0; i < 9; i++){
        soma += digitos[i] * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let primeiroDigito = (resto > 9) ? 0 : resto; 
    if(digitos[9] !== primeiroDigito) return invalid; 
 
    // Verificnado o Segundo dígito 
    soma = 0;
    for(let i = 0; i < 10; i++){
        soma+= digitos[i] * (11 - i);
    }
    resto = 11 - (soma % 11);
    let segundoDigito = (resto > 9 ? 0: resto);
    if(digitos[10] !== segundoDigito) return invalid; 
    return valid;
}

console.log(validarCPF('111.222.333-44'));



















// function validateCPF(cpf) {
//     cpf = cpf.replace(/[^\d]/g, ''); // Remova todos os caracteres não numéricos
  
//     if (cpf.length !== 11 || /^(.)\1*$/.test(cpf)) {
//       return false; // O CPF deve ter exatamente 11 dígitos e não pode ser composto por um único dígito repetido
//     }
  
//     const digits = cpf.split('').map(Number); // Converter cada dígito em um número
  
//     // Valide o primeiro dígito de verificação
//     let sum = 0;
//     for (let i = 0; i < 9; i++) {
//       sum += digits[i] * (10 - i);
//     }
//     let remainder = (sum * 10) % 11;
//     let expectedDigit = (remainder === 10) ? 0 : remainder;
//     if (digits[9] !== expectedDigit) {
//       return false; // O primeiro dígito de verificação é inválido
//     }
  
//     // Valide o segundo dígito de verificação
//     sum = 0;
//     for (let i = 0; i < 10; i++) {
//       sum += digits[i] * (11 - i);
//     }
//     remainder = (sum * 10) % 11;
//     expectedDigit = (remainder === 10) ? 0 : remainder;
//     if (digits[10] !== expectedDigit) {
//       return false; // O segundo dígito de verificação é inválido
//     }
  
//     return true; // CPF is valid
//   }
  
 


