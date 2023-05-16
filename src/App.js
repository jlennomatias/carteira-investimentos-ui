import React from "react"
import AuthProvider from './Contexts/AuthContext'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from './Pages/Login/index'
import Cadastro from './Pages/Cadastro/index'
import Home from "./Pages/Home/index"
import Carteira from "./Pages/Carteira/index"
import Operacao from "./Pages/Operacao/index"
import { RequireAuth } from "./Contexts/RequireAuth"


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastro />} />
          <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/carteira" element={<Carteira />} />
          <Route path="/operacao" element={<Operacao />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;