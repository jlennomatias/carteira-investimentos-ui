import React, {useState} from 'react'
import { Container, Form, SubContainerSign } from './styles'
import Input from '../../Components/Input/index'
import Botao from '../../Components/Botao/index'
// import { validarSenha, validarNome, validarConfirmarSenha } from '../../Utils/validadores'
import UserService from '../../Services/UserService'
import { NavLink, useNavigate } from 'react-router-dom'

const userService = new UserService()

const Cadastro = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const { data } = await userService.cadastrar({
        nome: form.nome,
        senha: form.senha,
      })
      if (data) {
        const responseLogin = await userService.login({
          email: form.nome,
          senha: form.senha
        })
        if (responseLogin === true) {
          alert('usuário Cadastrado com Sucesso')
          navigate('/home')
        }
    }
      setLoading(false)
    }
    catch (err) {
      alert('Algo deu errado com o Cadastro' + err)
    }
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  // const validadorInput = () => {
  //   return validarSenha(form.password)
  //   && validarConfirmarSenha(form.password, form.confirmarPassword)
  //   && validarNome(form.nome)
  // }

  return (
    <Container>
      <Form>
        <h1>Faça o seu Cadastro</h1>
        <Input
          name='nome'
          placeholder='Digite o seu nome'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='senha'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Input
          name='confirmarPassword'
          placeholder='Confirme a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Botao
          type='submit'
          text='Efetuar Cadastro!'
          onClick={handleSubmit}
          disabled={loading === true}
        />
        <SubContainerSign>
          <p>Já possui conta?</p>
          <NavLink to="*">Login</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
    
  )
}

export default Cadastro;