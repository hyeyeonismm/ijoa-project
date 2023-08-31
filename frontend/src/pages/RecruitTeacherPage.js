import Header from "../components/Header";
import {
  Box,
  Grid,
  Stack,
  Button,
  FormGroup,
  FormControl,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";

function RecruitTeacherPage() {
  return (
    <>
      <Header />

      <Container>
        <Banner>
          <Box
            sx={{
              color: "#5D5A88",
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            원하시는 돌봄 서비스를 <br />
            입력해주세요.
          </Box>
          <Box
            sx={{
              color: "#9795B5",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            아이조아가 최적의 돌보미를 찾아드립니다!
          </Box>
        </Banner>

        <SelectForm>
          <Title>돌봄 서비스 신청하기</Title>
          <FormGroup sx={{}}>
            <FormControl sx={{}}>
              <InputTextField
                placeholder="작성자 성함을 입력하세요."
                variant="outlined"
                name="name"
                // value={formData.name}
                // onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{}}>
              <InputTextField
                placeholder="선생님 성함을 입력하세요."
                variant="outlined"
                name="name"
                // value={formData.name}
                // onChange={handleChange}
              />
            </FormControl>
            <ButtonForm>
              <UndoButton>이전</UndoButton>
              <NextButton>다음</NextButton>
            </ButtonForm>
          </FormGroup>
        </SelectForm>
      </Container>
    </>
  );
}

const Container = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
}));

const Banner = styled(Box)(() => ({
  display: "block",
  textAlign: "center",
  margin: "200px 10px 10px 120px",
}));

const SelectForm = styled(Box)(() => ({
  display: "block",
  margin: "200px 0px 0px 0px",
}));

const Title = styled(Box)(() => ({
  color: "#8D8BA7",
  fontSize: 20,
}));

const InputTextField = styled(TextField)(() => ({
  display: "flex",
  padding: "10px 10px 0px 10px",

  "& .MuiOutlinedInput-root": {
    width: 170,
    height: 40,

    borderRadius: 6,
    "& fieldset": {
      border: "2px solid #ddd",
    },
    "&:hover fieldset": {
      border: " 2px solid #ddd",
    },
    "&.Mui-focused fieldset": {
      border: " 2px solid #ddd",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#87898E",
      fontSize: "12px",
    },
  },
}));

const UndoButton = styled(Button)(() => ({
  display: "flex",
  textAlign: "center",
  border: "1px solid #5D5A88",
  color: "#5D5A88",
  fontWeight: "700",
  fontSize: "18px",
  width: "160px",
  height: "50px",
  borderRadius: "12px",
  marginRight: 20,
  "&:hover": {
    background: "none",
  },
}));

const NextButton = styled(Button)(() => ({
  background: "#5D5A88",
  textAlign: "center",

  color: "white",
  fontWeight: "700",
  fontSize: "18px",
  width: "160px",
  height: "50px",
  borderRadius: "12px",
  "&:hover": {
    background: "#5D5A88",
  },
}));

const ButtonForm = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  margin: 0,
}));

export default RecruitTeacherPage;
