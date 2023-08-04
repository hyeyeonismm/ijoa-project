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
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
          <div style={{width: 1133, height: 0, left: 0, top: 46, position: 'absolute', border: '0.50px #C0C0C0 solid'}}></div>
          <div style={{width: 79, height: 96, left: 275, top: 0, position: 'absolute'}}>
            <div style={{width: 27, height: 27, left: 25, top: 32, position: 'absolute', background: '#5D5A88', borderRadius: 9999}} />
            <div style={{left: 12, top: 0, position: 'absolute', textAlign: 'center', color: '#8D8BA7', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '400', wordWrap: 'break-word'}}>step 1</div>
            <div style={{left: 0, top: 70, position: 'absolute', textAlign: 'center', color: '#9795B5', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '400', wordWrap: 'break-word'}}>본인 인증</div>
          </div>
          <div style={{width: 121, height: 96, left: 759, top: 0, position: 'absolute'}}>
            <div style={{width: 27, height: 27, left: 46, top: 32, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
            <div style={{left: 0, top: 70, position: 'absolute', textAlign: 'center', color: '#9795B5', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '400', wordWrap: 'break-word'}}>회원 정보 입력</div>
            <div style={{left: 31, top: 0, position: 'absolute', textAlign: 'center', color: '#8D8BA7', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '400', wordWrap: 'break-word'}}>step 2</div>
          </div>
        </div>


        <div style={{position: 'relative'}}>
          <div style={{width: 346, height: 158, left: 10, top: 0, position: 'relative'}}>
            <Title>휴대폰 번호를 입력해주세요</Title>
              <Box sx={{left: 36, top: 71, position: 'absolute', textAlign: 'center', color: '#8D8BA7', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
              원활한 서비스 이용을 위해 <br/>최초 1회 인증이 필요합니다<br/>
            </Box>
          </div>
        </div>
        <div style={{width: 375, height: 161, left: 0, top: 175, position: 'relative'}}>
          <ItemInline direction="row" alignItems="center">
            <ItemTitle>이름</ItemTitle>
            <TextField size="small" height="20px" />
            <ItemTitle>발급일자</ItemTitle>
            <TextField size="small" height="20px" />
          </ItemInline>
          <ItemInline>
            <ItemTitle>주민등록번호</ItemTitle>
            <TextField size="small" height="20px" />
            <ItemTitle>-</ItemTitle>
            <TextField size="small" height="20px" />
          </ItemInline>
          <Confirm>휴대폰 인증</Confirm>
        </div>
 
      </Container>
      



     
    





    </>
  );
}

const Title = styled(Box)(() => ({
  color: "#5D5A88",
  textAlign: "center",
  fontSize: "36px",
  fontWeight: 700,
}));

const Confirm = styled(Button)(() => ({
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


// const Container = styled(Box)(() => ({
//   textAlign: "center",
//   "& img": {
//     padding: "40px 0px 15px 0px",
//   },
// }));

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





export default SignupPage;
