import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import  GlobalStyle from "../assets/globalstyle"
import Login from "./Login";
import Cadastro from './Cadastro'
import Registros from "./Registros";
import NovoRegistro from "./NovoRegistro"

function App() {
  const [login, setLogin] = useState({});
  const [percentage, setPercentage] = useState(0);

  const contextValue = { login, setLogin, percentage, setPercentage };


  return (
    <>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/registros" element={<Registros />} />
            <Route path="/novoRegistro" element={<NovoRegistro />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;