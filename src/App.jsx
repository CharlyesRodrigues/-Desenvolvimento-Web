// Componentuzação
// Reatividade
// Props

/**Importando os componentes */

import CategoryList from "./components/CategoryList"
import CategoryRegister from "./components/CategoryRegister"
import Menu from "./components/Menu"



import ProductList from "./components/ProductList"
import ProductRegister from "./components/ProductRegister"
import { Box, Container} from "@mui/material"

//**************************************************************** */

import { useState } from "react"

function App() {
const [visivel, setVisivel] = useState(1)

function seletorDeComponente(){

    if(visivel === 1){
      return  <ProductRegister 
                    texto = "Componente de cadastro de Produtos"
                  
                />
    }else if(visivel === 2){
      return  <ProductList 
                      texto = "Componente de listagem de Produtos"
      
              />
    }else if(visivel === 3){
      return  <CategoryRegister 
                        texto = "Componente de cadastro de Categorias"
                                 
              /> 
    } else {
      return <CategoryList texto = "Componente de listagem de Categorias"/>
    }
      
      
}


  return (
   
   <>
   
  
       <Menu />
      
       

        <Container >
            <button onClick={ ()=> {setVisivel(1)}}>Cadastro de Produtos</button>
            <button onClick={ ()=> {setVisivel(2)}}>Listagem de Produtos</button>
            <button onClick={ ()=> {setVisivel(3)}}>Cadastro de Categorias</button>
            <button onClick={ ()=> {setVisivel(4)}}>Listagem de Categorias </button>
           
            {seletorDeComponente()}
           
        </Container>
       
  </>
      
    
  )
}

export default App
