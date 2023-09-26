import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Button, Box, TextField, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { alignProperty } from "@mui/material/styles/cssUtils";

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { signupuser } from '';

function SignupPage() {

  // const dispatch = useDispatch();

  const [Name, setName] = useState("");
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const [ConfirmPW, setConfirmPW] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  }
  const onIDHandler = (event) => {
    setID(event.currentTarget.value);
  }
  const onPWHandler = (event) => {
    setPW(event.currentTarget.value);
  }
  const onConfirmPW = (event) => {
    setConfirmPW(event.currentTarget.value);
  }

  // const onSubmitHandler = (event) => {
  //   event.preventDefault();

  //   if(PW !== ConfirmPW) {
  //     return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.")
  //   }

  //   let body = {
  //     id : ID,
  //     name : Name,
  //     pw : PW,
  //     confirmPW : ConfirmPW,
  //   }

  //   // dispatch(registerUser(body))
  //   // .then(response => {
  //   //   if(response.payload.success){
  //   //     props.history.push('loginPage')
  //   //   } else{
  //   //     alert('Error')
  //   //   }
  //   // })
  //}

  return (
    <>
      <Header/>
      <Container>
        <Title>회원가입</Title>
        
        <div style={{width: '100%', height: 150, position: 'relative', marginTop: 50}}>
          <div style={{width: '100%', height: 0, left: 0, top: 46, position: 'absolute', border: '0.40px #C0C0C0 solid'}}></div>
          <div style={{width: 79, height: 96, left: 300, top: 0, position: 'absolute'}}>
            <div style={{width: 27, height: 27, left: 25, top: 32, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
            <div style={{left: 12, top: 0, position: 'absolute', textAlign: 'center', color: '#8D8BA7', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '400'}}>step 1</div>
            <div style={{left: 0, top: 70, position: 'absolute', textAlign: 'center', color: '#9795B5', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '400'}}>본인 인증</div>
          </div>
          
          <div style={{width: 121, height: 96, left: 760, top: 0, position: 'absolute'}}>
            <div style={{width: 27, height: 27, left: 46, top: 32, position: 'absolute', background: '#5D5A88', borderRadius: 9999}} />
            <div style={{left: 0, top: 70, position: 'absolute', textAlign: 'center', color: '#9795B5', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '400'}}>회원 정보 입력</div>
            <div style={{left: 31, top: 0, position: 'absolute', textAlign: 'center', color: '#8D8BA7', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '400'}}>step 2</div>
          </div>
        </div>

        <div style={{width: 700, margin : '0 auto', position: 'relative'}}>
          <form style={{display: 'flex', flexDirection: 'column'}} /*onSubmit={onSubmitHandler}*/>
            <ItemInline>
              <Label>이름</Label>
              <TextField value={Name} onChange={onNameHandler} placeholder="이름"/>
            </ItemInline>
            <ItemInline>
              <Label>아이디</Label>
              <TextField value={ID} onChange={onIDHandler} placeholder="아이디"/>
              <DuplicateCheckButton>중복확인</DuplicateCheckButton>
            </ItemInline>
            <ItemInline>
              <Label>비밀번호</Label>
              <TextField type={"password"} value={PW} onChange={onPWHandler} placeholder="비밀번호"/>
            </ItemInline>
            <ItemInline>
              <Label>비밀번호 확인</Label>
              <TextField type={"password"} value={ConfirmPW} onChange={onConfirmPW} placeholder="비밀번호 확인"/>
            </ItemInline>
            <ItemInline>
              <Label>닉네임</Label>
              <TextField placeholder="닉네임"/>
            </ItemInline>
            <ItemInline>
              <Label>생년월일</Label>
              <TextField placeholder="생년월일"/>
            </ItemInline>
            <ItemInline>
              <Label>성별</Label>



              <TextField/>
            </ItemInline>
            <ItemInline>
              <Label>전화번호</Label>
              <TextField placeholder="전화번호"/>
            </ItemInline>
            <ItemInline>
              <Label>이메일</Label>
              <TextField type="email" placeholder="이메일"/>
            </ItemInline>
            <SignupButton formAction=''>가입하기</SignupButton>
          </form>
        </div>
      </Container>
    </>
  );
};

const Title = styled(Box)(() => ({
  color: "#5D5A88",
  textAlign: "center",
  fontSize: "36px",
  fontWeight: 700,
  marginTop: 20
}));

const Label = styled(Box)(() => ({
  color: "#8D8BA7",
  fontSize: "24px",
  width: 200,
  display: "inline-block"

}));

const ItemInline = styled(Box)(() => ({
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: "20px",
  display: "flex"
}));

const ItemTitle = styled(Box)(() => ({
  padding: "10px",
  textAlign: "center",
  display: "inline-block",
  fontSize: 14,
  color: "#8D8BA7",
}));

const PhoneNumField = styled(TextField)(() => ({
  width: 360,
  height: 55,
  borderRadius: 8,
  border: '0.50px #CFD3D4 solid',
  flexDirection: 'column'
}));

const CertifyField = styled(TextField)(() => ({
  width: 360,
  height: 55,
  borderRadius: 8,
  border: '0.50px #CFD3D4 solid',
  justifyContent: 'flex-start', gap: 10, display: 'inline-flex'
}));

const DuplicateCheckButton = styled(Button)(() => ({
  display: "inline-flex",
  background: "#5D5A88",
  color: "white",
  fontWeight: "700",
  fontSize: "18px",
  width: "120px",
  height: "50px",
  borderRadius: "47px",
  marginLeft: "25px",
  
  "&:hover": {
    background: "#5D5A88",
  },
}));



const SignupButton = styled(Button)(() => ({
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
}));



export default SignupPage;
