const Calculadora = (valorTela, botao) => {
        if (isNaN(valorTela.substr(-1)) & typeof botao !== 'number'){ 
            return (valorTela)
        } else {      
            return (valorTela + botao)
        }        
}

export default Calculadora;