import React from 'react'
import {TableContainer,Table,TableHead,TableCell,TableBody,TableRow ,Paper } from '@mui/material';
const CategoryList = (props) => {

  const rows = [
    {
      id: 1,
      nome: "Informática"
    },
    {
      id: 2,
      nome: "Produtos de casa "
    }
  ];
  return (
    
    <div>

    <h4>Listagem de Categorias</h4>
  <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="lefth">Nome</TableCell>
             
             
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
               
                <TableCell align="lefth">{row.id}</TableCell>
                <TableCell align="lefth">{row.nome}</TableCell>
            
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  </div>
  )
}

export default CategoryList