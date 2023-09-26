import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Box, TextField, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
//import { alignProperty } from "@mui/material/styles/cssUtils";

function LoginPage() {

  const navigate = useNavigate();
  //const dispatch = useDispatch();

  const onClickSignup = () => {
    navigate("/signup");
  };


  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  const onIDHandler = (event) => {
      setID(event.currentTarget.value);
  }
  const onPWHandler = (event) => {
      setPW(event.currentTarget.value);
  }
  const onSubmitHandler = (event) => {
      event.preventDefault();

      console.log('id', ID);
      console.log('pw', PW);
      
      let body = {
          id: ID,
          pw: PW,
      }

      //dispatch(loginUser(body));
  }

  return (
    <>
      <Header/>
    
      <LoginBox>
        <div style={{textAlign: 'center', color: '#5D5A88', fontSize: 36, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 4}}>로그인</div>

        <div style={{width: 450, position: 'relative'}}>
          <div style={{color: '#8D8D8D', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', float: 'right'}}>계정이 없나요?</div><br/>
          <div onClick={onClickSignup} style={{color: '#B87514', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', float: 'right'}}>회원가입하기</div>
        </div>

        <LoginForm onSubmit={onSubmitHandler}>
          <LoginFormText>아이디를 입력하세요</LoginFormText>
          <IDField value={ID} onChange={onIDHandler} placeholder="아이디"/>
          <LoginFormText>비밀번호를 입력하세요</LoginFormText>
          <PWField type="password" placeholder="비밀번호" value={PW} onChange={onPWHandler} />
          <LoginButton>로그인하기</LoginButton>
        </LoginForm>
      </LoginBox>
      
    </>
  );
}



const LoginButton = styled(Button)(() => ({
  background: "#5D5A88",
  color: "white",
  fontWeight: "700",
  fontSize: "18px",
  width: "120px",
  height: "50px",
  borderRadius: "47px",
  margin: "25px",
  "&:hover": {
    background: "#5D5A88",
  },
  float: 'center',
}));

const LoginBox = styled(Container)(() => ({
  width: 539,
  height: 650,
  background: 'white',
  boxShadow: '0px 4px 35px rgba(0, 0, 0, 0.08)',
  borderRadius: 40,
  marginTop: 40
}));

const LoginForm = styled("form")(() => ({
  justifyContent: 'center', 
  alignItems: 'center', 
  width: '100%',
}));

const IDField = styled("input")(() => ({
  width: 400,
  height: 30,
  display: "flex",
  borderRadius: "12px",
  border: "2px solid #ddd",
  padding: "10px 15px",
  justifyContent: "space-between",
  margin: "10px 0px 10px 0px",
  alignItems: "center",
  color: "black",
  fontSize: 14,
  "&:focus": {
    outline: "none",
  },
}));

const PWField = styled("input")(() => ({
  width: 400,
  height: 30,
  display: "flex",
  borderRadius: "12px",
  border: "2px solid #ddd",
  padding: "10px 15px",
  justifyContent: "space-between",
  margin: "10px 0px 10px 0px",
  alignItems: "center",
  color: "black",
  fontSize: 14,
  "&:focus": {
    outline: "none",
  },
}));

const LoginFormText = styled(Box)(() => ({
  left: 0,
  top: -2,
  color: '#8D8BA7',
  fontSize: 16,
  fontFamily: 'Poppins', 
  ontWeight: '400',
  marginTop: 30
}));



export default LoginPage;