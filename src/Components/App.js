import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import  GlobalStyle from "../assets/globalstyle"
import Login from "./Login";
import Cadastro from './Cadastro'

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
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;