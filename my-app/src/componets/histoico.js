import React from 'react';
import {
    Table,
    TableCell,
    TableContainer,
    TableRow,
    TableBody,
    TableHead,
    styled,
    Paper,
    Button
} from '@mui/material';
import { connect  } from 'react-redux';
import historicoRespostas from '../Redux/Actions'
//redux mapStatetoProcs
//outro componente de texto mapDispatchToProps

const Historico = ({historico}) => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
            fontSize: 10,
        }));
    
        const itens = historico.slice(historico.length - 10);
    return (
        <TableContainer component={Paper}>
            <Table arial-label='simple table' >
                <TableHead>
                </TableHead>
                <TableBody >
                    {itens.map (row => (
                    <TableRow key={row.id}>
                        <StyledTableCell align="right">{row.valorTela}={row.anser}</StyledTableCell>                  
                    </TableRow>                            
                    ))}                    
                 </TableBody>
            </Table>
        </TableContainer >
    )
};

const mapStateToProp = state => {
    return {historico: state.index.historico}
 }//retorna JSON

export default connect (mapStateToProp, null)(Historico);