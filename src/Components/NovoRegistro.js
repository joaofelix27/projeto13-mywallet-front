import styled from "styled-components";


export default function Registros() {
    
  return (
    <>
      <Container>
        <Top>
          <h1>Nova</h1>
          <ion-icon name="exit-outline"></ion-icon>
        </Top>
      </Container>
      </>
  )
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