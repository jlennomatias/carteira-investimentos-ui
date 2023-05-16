import React from 'react'
import { Container, SubContainerSign } from './styles'
import GridAtivo from '../../Components/GridAtivo'


const Carteira = () => {
  

  return (
    <Container>
      <h1>Carteira</h1>
      <SubContainerSign>
        <GridAtivo />
      </SubContainerSign>
    </Container>
  )
}

export default Carteira;