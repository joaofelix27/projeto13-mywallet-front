import styled from "styled-components";
import {  useState, useContext, useEffect } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Entrada() {
  const { token, setToken } = useContext(UserContext);
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");
  const navigate= useNavigate()

  useEffect(() => {
    const dadosLogin = window.localStorage.getItem("dadosLogin");
    if (dadosLogin) {
      const dadosLoginOBJ = JSON.parse(dadosLogin);
      setToken(dadosLoginOBJ);
    } else {
      navigate("/");
    }
  }, [setToken,navigate]);


  function registrarEntrada(event) {
    event.preventDefault();

    console.log(token)

    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };

    if (description !== "" && value !==0) {
      const URL = `http://localhost:5000/entrada`;
      const incomeData = {
        value,
        description,
        type: "income",
      };
      const promise = axios.post(URL, incomeData, config);
      promise.then((response) => {
        navigate("/registros");
      }).catch((err) => {
        alert("Erro no registro!");
      });
    }
  }

  function montarFormularioRegistro() {
    return (
      <>
        <form>
          <input type="number" placeholder="Valor" onChange={(e) => setValue(e.target.value)}></input>
          <input type="text" placeholder="Descrição" onChange={(e) => setDescription(e.target.value)}></input>
          <button type="submit">Salvar entrada</button>
        </form>
      </>
    );
  }

  const formularioRegistro = montarFormularioRegistro();

  return (
    <>
      <Container>
        <Top>
          <h1>Nova entrada</h1>
        </Top>
        <FormularioCadastro onSubmit={registrarEntrada}>{formularioRegistro}</FormularioCadastro>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  cursor: pointer;
  padding: 0 24px;
  padding-top: 25px;
  padding-bottom: 16px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: Raleway;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
  ion-icon {
    font-size: 30px;
    color: #ffffff;
  }
`;
const FormularioCadastro = styled.div`
  padding-top: 24px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    height: 58px;
    width: 326px;
    border-radius: 5px;
    background-color: #ffffff;
    border: 0px;
    margin-bottom: 13px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
    padding: 16px;
  }
  button {
    border: 0px;
    background-color: #a328d6;
    height: 46px;
    width: 326px;
    border-radius: 5px;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    color: #ffffff;
    margin-bottom: 36px;
  }
  h1 {
    font-family: Raleway;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    color: #ffffff;
    text-align: center;
  }
`;
