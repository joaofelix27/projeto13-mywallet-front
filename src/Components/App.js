import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "../assets/globalstyle";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Registros from "./Registros";
import NovoRegistro from "./NovoRegistro";
import UserContext from "./UserContext";

function App() {
  const [income, setIncome] = useState(false);

  const contextValue = { income, setIncome };

  return (
    <>
      <UserContext.Provider value={contextValue}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/registros" element={<Registros />} />
            <Route path="/novoRegistro" element={<NovoRegistro />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
