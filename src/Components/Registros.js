import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Registros() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Top>
          <h1>Olá, Fulano</h1>
          <ion-icon name="exit-outline"></ion-icon>
        </Top>
        <Body></Body>
        <Bottom>
          <div onClick={()=> navigate("/novoRegistro")}>
            <ion-icon name="add-circle-outline"></ion-icon>
            <h2>Nova entrada</h2>
          </div>
          <div onClick={()=> navigate("/novoRegistro")}>
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

const Body = styled.div`
  margin-top: 22px;
  height: 446px;
  width: 326px;
  left: 25px;
  top: 78px;
  border-radius: 5px;
  background-color: #ffffff;
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
    padding-right:85px;
    ion-icon {
    font-size: 23px;
    color: #ffffff;
    margin-bottom:32px;
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
