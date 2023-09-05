import * as React from "react";
import Header from "../components/Header";
import {
  Box,
  Grid,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";

function RecruitTeacherPage() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
          <InnerContainer>
            <Heading>
              <Title>돌봄 서비스 신청하기</Title>
              <Stepper>Step 1 of 4</Stepper>
            </Heading>
            <ContentsField>
              <FormControl
                sx={{
                  m: 1,
                  width: 230,
                  marginRight: 3,
                }}
              >
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <Font>돌봄 유형을 선택해주세요</Font>
                  </MenuItem>
                  <MenuItem value={10}>놀이 돌봄</MenuItem>
                  <MenuItem value={20}>등하원 돌봄</MenuItem>
                  <MenuItem value={30}>교육 돌봄</MenuItem>
                  <MenuItem value={40}>가사 돌봄</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  m: 1,
                  width: 230,
                }}
              >
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <Font>자녀의 성별을 선택해주세요</Font>
                  </MenuItem>
                  <MenuItem value={10}>남자</MenuItem>
                  <MenuItem value={20}>여자</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                sx={{
                  m: 1,
                  width: 230,
                  marginRight: 3,
                }}
              >
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <Font>돌봄 기간을 선택해주세요</Font>
                  </MenuItem>
                  <MenuItem value={10}>
                    정기 돌봄(최소 한 달, 주 2회 이상)
                  </MenuItem>
                  <MenuItem value={20}>비정기 돌봄</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="자녀의 이름을 입력해주세요"
                id="name"
                sx={{ m: 1, width: "230px" }}
                InputProps={{}}
              />

              <FormControl sx={{ m: 1, width: 230, marginRight: 3 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <Font>돌봄 시간을 선택해주세요</Font>
                  </MenuItem>
                  <MenuItem value={10}>6시~12시 사이</MenuItem>
                  <MenuItem value={20}>12시~18시 사이</MenuItem>
                  <MenuItem value={30}>18시~24시 사이</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: 230 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <Font>None</Font>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, width: 230, marginRight: 3 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <Font>돌봄 지역을 선택해주세요</Font>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: 230 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <Font>추가 요청사항이 있으신가요?</Font>
                  </MenuItem>
                  <MenuItem value={10}>네</MenuItem>
                  <MenuItem value={20}>아니오</MenuItem>
                </Select>
              </FormControl>
            </ContentsField>
            <ButtonContainer>
              <UndoButton>이전</UndoButton>
              <NextButton>다음</NextButton>
            </ButtonContainer>
          </InnerContainer>
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
  margin: "240px 10px 10px 120px",
}));

const SelectForm = styled(Box)(() => ({
  display: "flex",
  width: 510,
  padding: "30px",
  alignItems: "flex-start",
  border: "1px solid #DDE2E5",
  borderRadius: "20px",
  margin: "80px 100px 30px 0px",
}));

const InnerContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));

const Heading = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "24px",
  alignself: "stretch",
}));

const Stepper = styled(Grid)(() => ({
  width: "510px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  color: "#5D5A88",
  fontSize: "12px",
  textAlign: "right",
  borderBottom: "6px solid #e2e6f9",
}));

const Title = styled(Box)(() => ({
  color: "#8D8Ba7",
  fontSize: 20,
}));

const ContentsField = styled(Grid)(() => ({
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "wrap",
  margin: "25px 0px",
}));

const Font = styled(Grid)(() => ({
  color: "#ABAFB1",
  fontSize: "14px",
}));

const UndoButton = styled(Button)(() => ({
  color: "#5D5A88",
  fontSize: "18px",
  display: "flex",
  width: "160px",
  padding: "10px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  border: "1px solid #5D5A88",
  borderRadius: "12px",
  "&:hover": {
    background: "none",
  },
}));

const NextButton = styled(Button)(() => ({
  background: "#5D5A88",
  color: "#FFFF",
  fontSize: "18px",
  display: "flex",
  width: "160px",
  padding: "10px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  borderRadius: "12px",
  "&:hover": {
    background: "#5D5A88",
  },
}));

const ButtonContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "80px",
  gap: 34,
}));

export default RecruitTeacherPage;
