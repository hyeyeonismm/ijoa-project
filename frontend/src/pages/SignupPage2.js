import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Box, TextField, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { alignProperty } from "@mui/material/styles/cssUtils";

function SignupPage() {
  return (
    <>
      <Container>
        <Title>회원가입</Title>
        
        <div style={{width: '100%', height: 150, position: 'relative'}}>
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
          <table style={{width: 700}}>
            <tr>
              <td>이름</td>
              <td><TextField/></td>
            </tr>
            <tr>
              <td>아이디</td>
              <td><TextField/><button>중복확인</button></td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td><TextField/></td>
            </tr>
            <tr>
              <td>비밀번호확인</td>
              <td><TextField/></td>
            </tr>
            <tr>
              <td>닉네임</td>
              <td><TextField/><button>중복확인</button></td>
            </tr>
            <tr>
              <td>생년월일</td>
              <td><TextField/></td>
            </tr>
            <tr>
              <td>성별</td>
              <td>남자/여자</td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>010 - <TextField/>-<TextField/></td>
            </tr>
            <tr>
              <td>이메일</td>
              <td><TextField/>@gmail.com</td>
            </tr>
          </table>
          <button>가입하기</button>
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
}));

const ItemInline = styled(Box)(() => ({
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: "20px",
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

const CertifyButton = styled(Button)(() => ({
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
