import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {  useState, useContext } from "react";
import UserContext from "./UserContext";
import axios from "axios";

function Login() {
  const { token, setToken } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  function fazerLogin(event) {
    event.preventDefault();

    if (email !== "") {
      const URL = `https://mywallet27.herokuapp.com/login`;
      const profileData = {
        email: email,
        password: senha,
      };
      const promise = axios.post(URL, profileData);
      promise.then((response) => {
        const { data} =response
        const dadosLoginString = JSON.stringify(data.token);
        const nameString = JSON.stringify(data.name);
        window.localStorage.setItem("dadosLogin", dadosLoginString);
        window.localStorage.setItem("name", nameString);
        setToken(data.token)
        navigate("/registros");
      }).catch((err) => {
        alert("Erro no Login, dados incorretos!");
      });
    }
  }

  function montarFormularioLogin() {
    return (
      <>
        <form>
          <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></input>
          <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}></input>
          <button type="submit">Entrar</button>
        </form>
        <Link to="/cadastro" style={{ textDecoration: 'none' }} >
          <h1>Primeira vez? Cadastre-se!</h1>
        </Link>
      </>
    );
  }

  const formularioLogin = montarFormularioLogin();
  return (
    <Container>
      <h1>MyWallet</h1>
      <FormularioLogin onSubmit={fazerLogin}>{formularioLogin}</FormularioLogin>
    </Container>
  );
}
export default Login;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  cursor: pointer;
  padding-top: 159px;
  h1 {
    font-family: Saira Stencil One;
    font-size: 32px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;
const FormularioLogin = styled.div`
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
    margin-bottom:36px;
  }
  h1 {
    font-family: Raleway;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    color: #FFFFFF;
    text-align:center;
  }
`;
