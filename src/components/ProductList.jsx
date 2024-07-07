
import React from 'react'

import {TableContainer,Table,TableHead,TableCell,TableBody,TableRow ,Paper } from '@mui/material';
const ProductList = (props) => {

  
  const rows = [
    {
      id: 1,
      name: "Teclado",
      price: 100 ,
      category: "Informática"
    },
    {
      id: 2,
      name: "Tinta",
      price: 40 ,
      category: "Produtos de casa "
    }
  ];
  


  return (
<div>

  <h4>Listagem de Produtos</h4>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Id</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell align="lefth">Preço</TableCell>
            <TableCell align="lefth">Categorias</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <TableCell align="lefth">{row.id}</TableCell>
              <TableCell align="lefth">{row.name}</TableCell>
              <TableCell align="lefth">R${row.price}</TableCell>
              <TableCell align="lefth">{row.category}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
  )
}

export default ProductList