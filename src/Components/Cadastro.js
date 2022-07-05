import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaconf, setSenhaconf] = useState("");
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  function fazerCadastro(event) {
    event.preventDefault();

    if (senha!==senhaconf){
      alert("Senhas não conferem")
      return;
    }
    if (email !== "") {
      const URL = `https://mywallet27.herokuapp.com/cadastro`;
      const profileData = {
        email: email,
        name: nome,
        password: senha,
      };
      const promise = axios.post(URL, profileData);
      promise.then((response) => {
        console.log(response);
        if(response.status===201){
          alert("E-mail cadastrado!")
          navigate("/");
        }
      }).catch((err) => {
        if(err.response.status===409){
          alert("E-mail já cadastrado!")
        } else {
          alert("Erro no cadastro!");
        }
        
      });
    }
  }

  function montarFormularioLogin() {
    return (
      <>
        <form>
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
          ></input>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Confirme a senha"
            onChange={(e) => setSenhaconf(e.target.value)}
          ></input>
          <button type="submit">Cadastrar</button>
        </form>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Já tem uma conta? Entre agora!</h1>
        </Link>
      </>
    );
  }

  const formularioLogin = montarFormularioLogin();
  return (
    <Container>
      <h1>MyWallet</h1>
      <FormularioLogin onSubmit={fazerCadastro}>
        {formularioLogin}
      </FormularioLogin>
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
  padding-top: 95px;
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
  padding-top: 28px;
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
    margin-bottom: 32px;
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
