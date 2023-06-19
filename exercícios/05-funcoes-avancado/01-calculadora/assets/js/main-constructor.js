function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () =>{
        this.cliqueBotoes();
        this.pressEnter();
    };

    this.pressEnter = () =>{
        this.display.addEventListener('keyup', (event) => {
            if(event.key === 'Enter'){
                this.makeAccount();
            }
        });
    };

    this.cliqueBotoes = () =>{
        document.addEventListener('click', (event) =>{
            const elementoClicado = event.target;
            if(elementoClicado.classList.contains('btn-num')){this.btnParaDisplay(elementoClicado.innerText);
            }
            if(elementoClicado.classList.contains('btn-clear')){
                this.clearDisplay();
            }
            if(elementoClicado.classList.contains('btn-del')){
                this.deleteOne();
            }
            if(elementoClicado.classList.contains('btn-eq')){
                this.makeAccount();
            }
        });
    };

    this.btnParaDisplay = textDoBtn => {
        this.display.value += textDoBtn;
        this.display.focus();
    };

    this.clearDisplay = () => this.display.value = '';

    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);

    this.makeAccount = () =>{
        let conta = this.display.value;
        try{
            conta = eval(conta);
            if(!conta){
                alert('Conta inválida!');
                return;
            }
            
            this.display.value = conta;
        }catch(error){
            alert('Conta inválida!');
        }
    };

}

const calculator = new Calculadora();
calculator.inicia();