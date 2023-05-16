import React, {useState} from 'react'
import { Container, SubContainerSign } from './styles'
import Botao from '../../Components/Botao'
import UserService from '../../Services/UserService'
import { useNavigate } from 'react-router-dom'


const userService = new UserService()

const Home = () => {

  const [loading, setLoading] = useState()
  const navigate = useNavigate()
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      setLoading(true)
      const response = await userService.logout()
      console.log('response do Login', response)
      navigate('/login')
      setLoading(false)
    }
    catch (err) {
      alert('Algo deu errado com o Login.\n' + err)
    }
  }

  return (
    <Container>
        <h1>Home</h1>
        <SubContainerSign>
          <Botao
            type='submit'
            text='Logout!'
            onClick={handleSubmit}
            disabled={loading === true}
          />
        </SubContainerSign>
    </Container>
  )
}

export default Home;