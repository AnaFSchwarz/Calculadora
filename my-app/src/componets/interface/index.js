import * as React from 'react';
import { useState} from 'react';
import { Button, Container, Grid, Paper, styled } from '@mui/material';
import { Botao } from '../Botoes';
import Calculadora from '../operacoesCaculadora';
import HistoryIcon from '@mui/icons-material/History';
import { connect } from 'react-redux';
import historicoRespostas from '../../Redux/Actions'
import Historico from '../histoico';


const CalculatorBase = styled(Paper)(({theme}) => ({
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    borderRadius: 15,
  }));
  
  const OutputContainer = styled('div')(({theme}) => ({
    widht:'100%',
    textAlign: 'right',
    height:'2em',
    padding: theme.spacing(2),
    fontSize: '2em',
    overflow: 'hidden'
  }))

  const HistoricalButton = styled(Button)(({theme}) => ({
    borderRadius: 50,
  }));

  const ButtonsStyle = styled('div')(({theme}) => ({
    textAlign: 'right',
  }));

const Interface = ({add}) => {

    const [valorTela, setValorTela] = useState('');
    const [resultado, setResultado] = useState (0);
    const [openHistorico, setOpenHistorico] = useState(false);

  
    const resultOperation = () => {
    try {
        const finalAnswer = eval(valorTela);
        setResultado (finalAnswer);
        add({valorTela, anser: finalAnswer, id: new Date().getTime()});

        }catch (e) { 
        setResultado ('Error');
        }    
        setValorTela('');
    };

    const aoClicar = (valor) => {
        const retorna = Calculadora(valorTela,valor)
        setValorTela(retorna)
    };

    const limpar = () => {
      setValorTela ('')
    }
    
    const historico = () => {
      setOpenHistorico (!openHistorico);
    }


    return (
        <Container maxWidth='sm'>
        <CalculatorBase elevation={3}>
          <Grid container spacing = {1}>
            <Grid item xs={12}>
              { openHistorico ? <Historico/> : null }              
              <OutputContainer >{valorTela}</OutputContainer>
              <OutputContainer>{resultado}</OutputContainer>
              <ButtonsStyle>
              <HistoricalButton variant = 'outlined' onClick = {() => historico()}><HistoryIcon/></HistoricalButton>
              <Botao valor = {'AC'} operacao = {limpar}></Botao>
              </ButtonsStyle>
            </Grid>
            <Grid item container columnSpacing={1}>              
              <Botao valor = {1} operacao = {aoClicar} />
              <Botao valor = {2} operacao = {aoClicar} />
              <Botao valor = {3} operacao = {aoClicar} />
              <Botao valor = {'+'} operacao = {aoClicar} />
            </Grid>
            <Grid item container columnSpacing={1}>              
              <Botao valor = {4} operacao = {aoClicar}/>
              <Botao valor = {5} operacao = {aoClicar}/>
              <Botao valor = {6} operacao = {aoClicar}/>
              <Botao valor = {'-'} operacao = {aoClicar}/>
            </Grid>
            <Grid item container columnSpacing={1}>              
              <Botao valor = {7} operacao = {aoClicar}/>
              <Botao valor = {8} operacao = {aoClicar}/>
              <Botao valor = {9} operacao = {aoClicar}/>
              <Botao valor = {'/'} operacao = {aoClicar}/>
            </Grid>
            <Grid item container columnSpacing={1}>              
              <Botao valor = {'.'} operacao = {aoClicar}/>
              <Botao valor = {0} operacao = {aoClicar}/>
              <Botao valor = {'='} operacao = {resultOperation}/>
              <Botao valor = {'*'} operacao = {aoClicar}/>
            </Grid>
          </Grid>
        </CalculatorBase>
      </Container>
    )
}

const mapDispatchToProps = dispatch => ({
  add: historico => dispatch(historicoRespostas.add(historico))
});

export default connect(null, mapDispatchToProps)(Interface);