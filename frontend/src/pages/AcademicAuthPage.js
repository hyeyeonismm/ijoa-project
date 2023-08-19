import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

function AcademicAuthPage() {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/auth");
  };
  return (
    <>
      <Header />
      <Title>기타 서류 등록 등록</Title>
      <Box
        sx={{
          marginLeft: "80px",
          width: "1350px",
          height: "1px",
          background: "#C0C0C0",
          my: 1,
        }}
      />
      <Container>
        <Box
          sx={{
            color: "#5D5A88",
            fontSize: "28px",
            fontWeight: 700,
            marginBottom: "40px",
          }}
        >
          제출 가능한 서류
        </Box>
        <Box
          sx={{
            color: "#8D8BA7",
            fontSize: "16px",
            paddingBottom: "20px",
            textAlign: "left",
            paddingLeft: "540px",
          }}
        >
          <li>6개월 이내 발급 받은 재학증명서</li>
          <li>자격증 증명서</li>
          <li>졸업증명서 또는 학위증</li>
          <li>학교명, 학과명, 인적사항이 작성된 등록금 내역서</li>
        </Box>
        <Box>파일 업로드</Box>
        <input 파일 선택 />
        <Confirm onClick={onClickButton}>확인</Confirm>
      </Container>
    </>
  );
}

const Title = styled(Box)(() => ({
  padding: "80px 0px 10px 80px",
  fontWeight: 700,
  color: "#5D5A88",
  fontSize: 16,
}));

const Container = styled(Box)(() => ({
  textAlign: "center",
  padding: "40px",
}));

const Confirm = styled(Button)(() => ({
  background: "#5D5A88",

  color: "white",
  fontWeight: "700",
  fontSize: "18px",
  width: "120px",
  height: "50px",
  borderRadius: "47px",
  margin: "35px",
  "&:hover": {
    background: "#5D5A88",
  },
}));

export default AcademicAuthPage;
