import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import UserContext from "./UserContext";
import axios from "axios";

export default function Registros() {
  const { token, setToken } = useContext(UserContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [register, setRegister] = useState([]);

  useEffect(() => {
    const dadosLogin = window.localStorage.getItem("dadosLogin");
    const name = window.localStorage.getItem("name");
    if (dadosLogin) {
      const dadosLoginOBJ = JSON.parse(dadosLogin);
      const nameOBJ = JSON.parse(name);
      setToken(dadosLoginOBJ);
      setName(nameOBJ);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const URL = `https://mywallet27.herokuapp.com/entrada`;
      const promise = axios.get(URL, config);
      promise
        .then((response) => {
          const { data } = response;
          setRegister(data);
        })
        .catch((err) => {
          console.log("Carregando");
        });
    } else {
      navigate("/");
    }
  }, [setToken, token, setName, name]);

  useEffect(() => {
    if (register.length !== 0) {
      let aux = 0;
      for (let i = 0; i < register.length; i++) {
        if (register[i].type === "income") {
          aux += Number(register[i].value);
        } else {
          aux -= Number(register[i].value);
        }
      }
      const auxFormated = (Math.round(aux * 100) / 100).toFixed(2);
      setBalance(auxFormated);
    }
  }, [balance, setBalance, register, setRegister]);
  return (
    <>
      <Container>
        <Top>
          <h1>Olá, {name}</h1>
          <ion-icon
            onClick={() => {
              navigate("/");
            }}
            name="exit-outline"
          ></ion-icon>
        </Top>
        {register.length === 0 ? (
          <Empty> Não há registros de entrada ou saída </Empty>
        ) : (
          <Body>
            {register.map((value, index) => (
              <Registro key={index}>
                <Date>
                  <h2>{value.time}</h2>
                </Date>
                <Description>
                  <h1> {value.description} </h1>
                </Description>
                <Value type={value.type}>
                  <h3> {value.value}</h3>
                </Value>
              </Registro>
            ))}
            <Balance value={balance}>
              <h1>
                <strong>SALDO</strong>
              </h1>
              <h2>{register.length === 0 ? "Carregando" : balance}</h2>
            </Balance>
          </Body>
        )}
        <Bottom>
          <div
            onClick={() => {
              navigate("/entrada");
            }}
          >
            <ion-icon name="add-circle-outline"></ion-icon>
            <h2>Nova entrada</h2>
          </div>
          <div
            onClick={() => {
              navigate("/saida");
            }}
          >
            <ion-icon name="remove-circle-outline"></ion-icon>
            <h2>Nova saída</h2>
          </div>
        </Bottom>
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
const Empty = styled.div`
  padding: 0 73px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  height: 446px;
  width: 326px;
  border-radius: 5px;
  background-color: #ffffff;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #868686;
`;

const Body = styled.div`
  display: flex;
  padding: 0 13px;
  padding-top: 23px;
  flex-direction: column;
  margin-top: 22px;
  height: 446px;
  width: 326px;
  border-radius: 5px;
  background-color: #ffffff;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #868686;
  position: relative;
`;
const Balance = styled.div`
  left: 13px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 5px;

  h1 {
    font-family: Raleway;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    color: #000000;
  }
  h2 {
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    color: ${(props) => (props.value > 0  ? "#03AC00" : "#C70000")};
  }
`;
const Registro = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Date = styled.div`
  width: 20%;
  h2 {
    font-family: Raleway;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    color: #c6c6c6;
  }
`;
const Description = styled.div`
  width: 60%;
  display: flex;
  justify-content: left;
  align-items: center;
  h1 {
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #000000;
  }
`;
const Value = styled.div`
  width: 20%;
  display: flex;
  justify-content: right;
  align-items: center;
  h3 {
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    color: ${(props) => (props.type === "income" ? "#03AC00" : "#C70000")};
  }
`;
const Bottom = styled.div`
  margin-top: 13px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  div {
    height: 114px;
    width: 155px;
    left: 25px;
    top: 537px;
    border-radius: 5px;
    background-color: #a328d6;
    padding: 10px;
    padding-right: 85px;
    ion-icon {
      font-size: 23px;
      color: #ffffff;
      margin-bottom: 32px;
    }
    h2 {
      font-family: Raleway;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0em;
      color: #ffffff;
    }
  }
`;
