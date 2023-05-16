import axios from 'axios';

export default class UserServices {
  constructor () {
    this.axios = axios.create({
      baseURL:  'http://127.0.0.1:8000'
    })
  }

  async login (dados) {
    
    const params = new URLSearchParams();
    params.append('username', dados.nome);
    params.append('password', dados.senha);
    const {data} = await this.axios.post('/token', params.toString(), {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    // const data = {'nome': dados.nome, 'token': 'token123'}
    
    if (data) {
      console.log("imprimindo o retorno", data)
      localStorage.setItem("nome", data.nome)
      localStorage.setItem("token", data.token)
      console.log("chegou aqui")
      return true
    }

    return
  }

  async cadastrarAtivo (dados) {
    console.log(dados)
    return this.axios.post('/ativo', dados)
  }

  //Desafio ---> implemente um botão que chama essa função dentro da página Home
  async removerAtivo () {
  }
}