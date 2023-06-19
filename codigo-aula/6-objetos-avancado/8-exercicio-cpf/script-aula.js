// Exercício Validando CPF
// 705.484.450-52 | 070.987.720-03
/* 
Passo 1: para validar um CPF é feito uma conta con os nove primeiros números, após essa conta temos o 10 número, e utilizamos agora os dez números para gerar o décimo primeiro. 

- A conta:
Vamos múltiplicar os números em sequência por começando do dez regressando até o dois. 
Exemplo:
CPF: 705.484.450-52

CONTA:

conta do 1º dígito 
7   0   5   4   8   4   4   5   0
X   x   x   x   x   x   x   x   x
10  9   8   7   6   5   4   3   2 

11 - (resultado  % 11) =  Primeiro dígito  


Se o primeiro valor for > 9 ele é 0.
conta do 2º dígito 

7   0   5   4   8   4   4   5   0 p1
X   x   x   x   x   x   x   x   x x
11  10  9   8   7   6   5   4   3 2 

11 - (resultado %  11) = Segundo dígito 
*/

// O cpf deve ser uma string, pois tem cpf's que começam com zero, e pode ocazionar erros na nossa conta. 
// para limpar o cpf vamos utilizar dentro do replace e expressão /\D+/g
// Utilize o array.from para converter para um array e utilizar map ou reduce. 
// 705.484.450-52 | 070.987.720-03

function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove any non-digit characters
  
    if (cpf.length !== 11 || /^(.)\1*$/.test(cpf)) {
      return false; // CPF must have exactly 11 digits and cannot be composed of a single repeating digit
    }
  
    const digits = cpf.split('').map(Number); // Convert each digit to a number
  
    // Validate the first verification digit
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += digits[i] * (10 - i);
    }
    let remainder = sum % 11;
    let expectedDigit = (remainder < 2) ? 0 : 11 - remainder;
    if (digits[9] !== expectedDigit) {
      return false; // First verification digit is invalid
    }
  
    // Validate the second verification digit
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += digits[i] * (11 - i);
    }
    remainder = sum % 11;
    expectedDigit = (remainder < 2) ? 0 : 11 - remainder;
    if (digits[10] !== expectedDigit) {
      return false; // Second verification digit is invalid
    }
  
    return true; // CPF is valid
  }

  const cpf1 = '11111111111'; // Invalid CPF
  console.log(validateCPF(cpf1)); // Output: false

  
  