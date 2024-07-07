import { Card, CardContent, Button, TextField } from '@mui/material';


import React from 'react'

const ProductRegister = (props) => {
  return (

    <Card>

      <CardContent style={{
          display: "flex",
          flexDirection: "column",
          width:"100%",        
          marginBottom: "5px",
          alignItems: "center",
          gap:"10px",
          textAlign:"center"
        }}>        


          <div style={{ fontSize: "1rem" }}>{props.texto}</div>

          <TextField style={{width:"60%"}} id="outlined-basic" label="Nome" variant="outlined" />
          <TextField style={{width:"60%"}} id="outlined-basic" label="Preço" variant="outlined" />
          <TextField style={{width:"60%"}} id="outlined-basic" label="Categoria" variant="outlined" />
          <Button style={{width:"30%"}} variant="contained" >Salvar</Button>
      
      </CardContent>
    </Card>
  )
}

export default ProductRegister