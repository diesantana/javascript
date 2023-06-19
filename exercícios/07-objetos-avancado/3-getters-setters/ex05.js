// Exercício 5: Crie uma função construtora BankAccount com a propriedade balance. Adicione uma função getter para formattedBalance que retorna o saldo formatado como uma string com duas casas decimais e um símbolo de moeda e uma função setter para balance que define a propriedade balance para o novo valor.

function BankAccount(balance){
    this.balance = balance;
    Object.defineProperty(this, 'formattedBalance', {
        get: function(){
            return `R$ ${this.balance.toFixed(2)}`
        },
        set: function(newBalance){
            balance = newBalance;
            
        }
    });
}

let account = new BankAccount(270);
console.log(account.formattedBalance);
account.balance = 300;
console.log(account.formattedBalance);