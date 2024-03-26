import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables({data}) {console.log(data)
  return (
    <TableContainer component={Paper} sx={{maxHeight: "70vh",overflowY: 'auto' }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell  style={{ position: 'sticky', top: 0}}>Cliente</StyledTableCell>
            <StyledTableCell  style={{ position: 'sticky', top: 0 }} align="right">Data Emissione</StyledTableCell>
            <StyledTableCell  style={{ position: 'sticky', top: 0}} align="right">Numero Fattura</StyledTableCell>
            <StyledTableCell  style={{ position: 'sticky', top: 0}} align="right">Addetto Vendite</StyledTableCell>
            <StyledTableCell  style={{ position: 'sticky', top: 0}} align="right">Scadenza</StyledTableCell>
            <StyledTableCell  style={{ position: 'sticky', top: 0}} align="right">N° Ordine</StyledTableCell>
            <StyledTableCell  style={{ position: 'sticky', top: 0}} align="right">Importo Imponibile</StyledTableCell>
            <StyledTableCell  style={{ position: 'sticky', top: 0}} align="right">Importo Imposta</StyledTableCell>
            <StyledTableCell  style={{ position: 'sticky', top: 0}} align="right">Importo Totale</StyledTableCell>
            <StyledTableCell  style={{ position: 'sticky', top: 0}} align="right">Importo Dovuto</StyledTableCell>
            <StyledTableCell  style={{ position: 'sticky', top: 0}} align="right">Stato fattura</StyledTableCell>
            <StyledTableCell  style={{ position: 'sticky', top: 0}} align="right">Stato Pagamento</StyledTableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.cliente}
              </StyledTableCell>
              <StyledTableCell align="right">{row.data_emissione}</StyledTableCell>
              <StyledTableCell align="right">{row.numero_fattura}</StyledTableCell>
              <StyledTableCell align="right">{row.addetto_vendite}</StyledTableCell>
              <StyledTableCell align="right">{row.scadenza}</StyledTableCell>
              <StyledTableCell align="right">{row.n_ordine}</StyledTableCell>
              <StyledTableCell align="right">{row.importo_imponibile}</StyledTableCell>
              <StyledTableCell align="right">{row.importo_imposta}</StyledTableCell>
              <StyledTableCell align="right">{row.importo_totale}</StyledTableCell>
              <StyledTableCell align="right">{row.importo_dovuto}</StyledTableCell>
              <StyledTableCell align="right">{row.stato_fattura}</StyledTableCell>
              <StyledTableCell align="right">{row.stato_pagamento}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}