import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "../assets/globalstyle";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Registros from "./Registros";
import Entrada from './Entrada'
import Saida from './Saida'
import UserContext from "./UserContext";

function App() {
  const [token, setToken] = useState("");

  const contextValue = { token, setToken };

  return (
    <>
      <UserContext.Provider value={contextValue}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/registros" element={<Registros />} />
            <Route path="/entrada" element={<Entrada />} />
            <Route path="/saida" element={<Saida />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
