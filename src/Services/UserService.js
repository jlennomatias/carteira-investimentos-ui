import axiosInstance from "./Api";

export default class UserServices {
  
  async login (dados) {
    
    const params = new URLSearchParams();
    params.append('username', dados.nome);
    params.append('password', dados.senha);
    const {data} = await axiosInstance.post('/token', params.toString(), {
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
      return true
    }

    return
  }

  async listarAtivos () {
    const idCarteira = "bd21e028-16e2-4061-8d6a-20d65ef907b2"
    axiosInstance.get(`/carteira/${idCarteira}`)
    .then((res) => {
      return res.data.ativos_carteira
    })
    .catch((err) => console.log(err))
  }
  
  async cadastrar (dados) {
    console.log(dados)
    return this.axios.post('/user', dados)
  }

  usuarioAutenticado () {
    return localStorage.getItem("token")
    // return typeof localStorage.getItem("token")
  }

  //Desafio ---> implemente um botão que chama essa função dentro da página Home
  async logout () {
    localStorage.removeItem("token")
    localStorage.removeItem("nome")
  }
}