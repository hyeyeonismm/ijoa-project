import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

function AuthPage() {
  const navigate = useNavigate();

  const onClickIdAuth = () => {
    navigate("/idauth");
  };

  const onClickCrimeAuth = () => {
    navigate("/crimeauth");
  };

  const onClickAcademicAuth = () => {
    navigate("/academicauth");
  };
  return (
    <>
      <Header />
      <Banner>
        <Box
          sx={{
            color: "#5D5A88",
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "25px",
          }}
        >
          돌봄 선생님 인증
        </Box>
        <Box sx={{ color: "#9795B5", fontSIze: "14px", marginBottom: "20px" }}>
          아이조아는 철저한 신원검증을 통해 선생님을 선발합니다.
          <br />
          돌봄 선생님을 위한 4가지 필수 절차를 확인해주세요.
        </Box>
        <Auth onClick={onClickIdAuth}>인증하기</Auth>
      </Banner>
      <ButtonForm>
        <RegButton onClick={onClickIdAuth}>1. 신분증 등록</RegButton>
        <RegButton onClick={onClickCrimeAuth}>
          2. 성범죄 및 아동학대 조회 동의서 등록
        </RegButton>
        <RegButton onClick={onClickAcademicAuth}>3. 학력 서류 등록</RegButton>
      </ButtonForm>
    </>
  );
}

const Banner = styled(Box)(() => ({
  textAlign: "center",
  padding: "85px 200px 20px 140px",
  fontFamily: "DM Sans, sans-serif",
}));

const ButtonForm = styled(Box)(() => ({
  textAlign: "center",
  marginLeft: "430px",
  width: "50%",
}));

const Auth = styled(Button)(() => ({
  background: "#5D5A88",
  color: "white",
  fontWeight: "700",
  fontSize: "18px",
  width: "258px",
  height: "56px",
  borderRadius: "47px",
  margin: "25px",
  "&:hover": {
    background: "#5D5A88",
  },
}));

const RegButton = styled(Button)(() => ({
  display: "block",
  borderRadius: "100px",
  marginBottom: "15px",
  border: "1px solid #D4D2E3",
  width: "612px",
  height: "70px",
  color: "#5D5A88",
  fontSize: "18px",
  fontWeight: "700",
  "&:hover": {
    background: "#D4D2E3",
  },
}));

export default AuthPage;
