import Header from "../components/Header";
import {
  Box,
  Grid,
  Stack,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";

function ApplyRegisterPage() {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const times = ["0시~6시", "6시~12시", "12시~18시", "18시~24시"];
  const ages = ["48개월 이하", "7세 이하", "10세 이하", "13세 이하"];
  const periods = ["정기돌봄(최소 한 달, 주 2회 이상)", "비정기 돌봄"];
  const sexs = ["남자", "여자"];
  const activities = ["놀이 돌봄", "등하원 돌봄", "교육 돌봄", "가사 돌봄"];

  // const onClickRegister = () => {
  //  const newTeacher= {
  //   name= 'New Teacher'
  //  };
  // };

  return (
    <>
      <Header />
      <Container>
        <Box
          sx={{
            color: "#5D5A88",
            fontSize: "24px",
            paddingBottom: "30px",
            fontWeight: 700,
            marginTop: "120px",
          }}
        >
          프로필을 먼저 등록하여 <br />
          돌보미로 활동해보세요
        </Box>
      </Container>
      <Title>프로필 등록하기</Title>
      <Box
        sx={{
          marginLeft: "120px",
          width: "1280px",
          height: "1px",
          background: "#C0C0C0",
          my: 1,
        }}
      />
      <RegisterForm>
        <FormGroup sx={{ padding: "0px 140px" }}>
          <FormSection>
            <FormTitle>희망 요일</FormTitle>
            {days.map((day, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox color="primary" />}
                label={day}
                sx={{ color: "#6C757D" }}
              />
            ))}
          </FormSection>
          <FormSection>
            <FormTitle>희망 시간</FormTitle>
            {times.map((times, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox color="primary" />}
                label={times}
                sx={{ color: "#6C757D" }}
              />
            ))}
          </FormSection>
          <FormSection>
            <FormTitle>희망 연령</FormTitle>
            {ages.map((ages, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox color="primary" />}
                label={ages}
                sx={{ color: "#6C757D" }}
              />
            ))}
          </FormSection>
          <FormSection>
            <FormTitle>희망 성별</FormTitle>
            {sexs.map((sexs, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox color="primary" />}
                label={sexs}
                sx={{ color: "#6C757D", paddingRight: 5 }}
              />
            ))}
          </FormSection>
          <FormSection>
            <FormTitle>정기 여부</FormTitle>
            {periods.map((periods, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox color="primary" />}
                label={periods}
                sx={{
                  color: "#6C757D",
                  display: "block",
                }}
              />
            ))}
          </FormSection>
          <FormSection>
            <FormTitle>희망 장소</FormTitle>
          </FormSection>
        </FormGroup>
        <FormGroup>
          <FormSection>
            <FormTitle>돌봄 활동</FormTitle>
            {activities.map((activities, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox color="primary" />}
                label={activities}
                sx={{ color: "#6C757D" }}
              />
            ))}
          </FormSection>
          <FormSection>
            <FormTitle
              sx={{ fontSize: "24px", paddingTop: 6, paddingBottom: 0 }}
            >
              자기소개서
            </FormTitle>
            <FormTitle>제목 작성</FormTitle>
            <InputTitleText type="text" placeholder="제목을 입력해주세요" />
            <FormTitle>내용 작성</FormTitle>
            <InputSectionText type="text" placeholder="내용을 작성해주세요" />
          </FormSection>
        </FormGroup>
      </RegisterForm>
      <ButtonContainer>
        <RegisterButton>등록하기</RegisterButton>
        <EditButton>수정하기</EditButton>
      </ButtonContainer>
    </>
  );
}

const Title = styled(Box)(() => ({
  padding: "80px 0px 5px 120px",
  color: "#6C757D",
  fontSize: 16,
}));

const Container = styled(Box)(() => ({
  textAlign: "center",
  color: "#8D8BA7",
  fontSize: "16px",
}));

const RegisterForm = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
}));

const FormSection = styled(Box)(() => ({}));

const FormTitle = styled(Box)(() => ({
  color: "#5d5a88",
  padding: "20px 0px 5px 0px",
  fontWeight: 700,
  fontSize: 18,
}));

const InputTitleText = styled("input")({
  display: "flex",
  borderRadius: "12px",
  border: "2px solid #ddd",
  width: 570,
  height: 30,
  padding: "10px 15px",
  justifyContent: "space-between",
  //margin: "30px 0px 10px 0px",
  alignItems: "center",
  color: "black",
  fontSize: 14,
  "&:focus": {
    outline: "none",
  },
});

const InputSectionText = styled("textarea")({
  display: "flex",
  borderRadius: "12px",
  border: "2px solid #ddd",
  width: 570,
  height: 200,
  padding: "10px 15px",
  //justifyContent: "space-between",
  //margin: "30px 0px 10px 0px",
  //alignItems: "center",
  color: "black",
  fontSize: 14,
  "&:focus": {
    outline: "none",
  },
});

const ButtonContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  paddingTop: "30px",
}));

const RegisterButton = styled(Button)(() => ({
  background: "#5D5A88",
  color: "white",
  fontWeight: "700",
  fontSize: "18px",
  width: "350px",
  height: "60px",
  borderRadius: "10px",
  margin: 15,
  "&:hover": {
    background: "#5D5A88",
  },
}));

const EditButton = styled(Button)(() => ({
  background: "#F1F1F1",
  color: "#5D5a88",
  fontWeight: "700",
  fontSize: "18px",
  width: "350px",
  height: "60px",
  borderRadius: "10px",
  margin: 15,
  "&:hover": {
    background: "#F1F1F1",
  },
}));

export default ApplyRegisterPage;
