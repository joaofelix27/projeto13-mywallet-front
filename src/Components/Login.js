import styled from "styled-components";

function Login() {
  return (
    <Container>
      <h1>MyWallet</h1>
    </Container>
  );
}
export default Login;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  cursor: pointer;
  padding-top:159px;
  h1 {
    font-family: Saira Stencil One;
    font-size: 32px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
  }
`;
// const FormularioLogin = styled.div`
//   form {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }

//   input {
//     height: 45px;
//     width: 303px;
//     border-radius: 5px;
//     margin-bottom: 6px;
//     border: 1px solid #d4d4d4;
//     font-family: Lexend Deca;
//     font-size: 20px;
//     font-weight: 400;
//     line-height: 25px;
//     font-family: Lexend Deca;
//     font-size: 20px;
//     font-weight: 400;
//     line-height: 25px;
//     letter-spacing: 0em;
//     padding-left: 11px;
//     padding-bottom: 11px;
//     padding-top: 9px;
//     background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
//   }

//   button {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: ${(props) => (props.disabled ? "auto" : "45px")};
//     opacity: ${(props) => (props.disabled ? 0.7 : 1)};
//     color: #ffffff;
//     width: 303px;
//     border-radius: 4.6px;
//     background-color: #52b6ff;
//     border: 0;
//     font-family: Lexend Deca;
//     font-size: 21px;
//     font-weight: 400;
//     line-height: 26px;
//     letter-spacing: 0em;
//     margin-bottom: 25px;
//   }
//   h1 {
//     font-family: Lexend Deca;
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 17px;
//     letter-spacing: 0em;
//     text-align: center;
//     color: #52b6ff;
//   }
// `;
