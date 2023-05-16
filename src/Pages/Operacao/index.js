import React from 'react'
import { Container, SubContainerSign } from './styles'
import GridOperacao from '../../Components/GridOperacao'



const Carteira = () => {
  

  return (
    <Container>
      <h1>Carteira</h1>
      <SubContainerSign>
        <GridOperacao />
      </SubContainerSign>
    </Container>
  )
}

export default Carteira;