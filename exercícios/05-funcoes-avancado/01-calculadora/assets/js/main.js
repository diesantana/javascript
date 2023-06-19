function createCalculator(){
    return {
        display: document.querySelector('.display'),
        inicia(){
           this.cliqueBotoes();
           this.pressEnter();
        },
        pressEnter(){
            display.addEventListener('keyup', (event) => {
                if(event.key === 'Enter'){
                    this.makeAccount();
                }
            });
        },
        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const elementoClicado = e.target;
                if(elementoClicado.classList.contains('btn-num')){
                    this.btnParaDisplay(elementoClicado.innerText);
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
            }.bind(this));
        },
        btnParaDisplay(textDoBtn){
            this.display.value += textDoBtn;
        },
        clearDisplay(){
            this.display.value = '';
        },
        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },
        makeAccount(){
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
        }
    };

}

const calculator = createCalculator();
calculator.inicia();




