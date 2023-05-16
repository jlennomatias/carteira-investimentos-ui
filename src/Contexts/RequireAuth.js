import Login from "../Pages/Login"
import UserServices from "../Services/UserService"

const userService = new UserServices()

export const RequireAuth = ({ children }) => {
  const usuarioAutenticado = userService.usuarioAutenticado()
  console.log('usuarioAutenticado', usuarioAutenticado)
  return usuarioAutenticado ? children : <Login/>
}