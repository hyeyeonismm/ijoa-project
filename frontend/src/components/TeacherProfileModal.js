import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Stack,
  Button,
  Avatar,
  Modal,
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Close from "@mui/icons-material/CloseRounded";

function TeacherProfileModal({ open, handleClose }) {
  const [selectedDays, setSelectedDays] = useState({
    월: true,
    화: false,
    수: true,
    목: false,
    금: true,
  });

  const handleChange = (event) => {
    setSelectedDays({
      ...selectedDays,
      [event.target.name]: event.target.checked,
    });
  };

  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/chatting");
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Body alignItems="center" spacing={2}>
          <CloseButton onClick={handleClose} title="닫기" />

          <Stack alignItems="center">
            <Stack spacing={2}>
              <Container>
                <Avatar />
                <Profilebox>
                  <Box
                    sx={{
                      fontSize: "16px",
                    }}
                  >
                    이진형
                  </Box>
                  <Box sx={{ fontSize: "12px", color: "#87898E" }}>
                    서울특별시 강남구
                  </Box>
                </Profilebox>
              </Container>

              <BodyField>
                <Box
                  sx={{
                    fontSize: "12px",
                    color: "#87898E",
                    paddingBottom: "4px",
                  }}
                >
                  About me
                </Box>
                <Box sx={{ fontSize: "14px" }}>
                  정기적으로 시터 일을 하고있는 대학생입니다.😊
                </Box>
                <Grid sx={{ paddingTop: "15px", fontSize: "14px" }}>
                  안녕하세요. 저는 현재 동국대학교 4학년에 재학 중인
                  이진형입니다. 저는 2022년부터 정기적으로 시터 일을 해왔고,
                  시터 일 외에도 영어학원에서 아이들 을 가르치는 수업 조교로
                  일해본 경험이 있습니다. 저는 교육돌봄을 가장 희망하지만,
                  놀이돌봄도 가능합니다! 평소 아이를 좋아하고 친근한 성격이기
                  때문에 아이들이 금새 적응할 수 있을 것이라고 생각합니다.
                  편하게 연락주세요!
                </Grid>
              </BodyField>
            </Stack>
            <Stack spacing={2} mt={4}>
              <GridContainer container direction="row">
                <GridItemOne item>
                  <SubTitle>희망 요일</SubTitle>

                  <AnswerBox>월, 수, 금</AnswerBox>
                  <SubTitle>희망 시간대</SubTitle>
                  <AnswerBox>오후 4시 이후</AnswerBox>
                  <SubTitle>희망 연령</SubTitle>
                  <AnswerBox>8세 이상</AnswerBox>
                  <SubTitle>희망 성별</SubTitle>
                  <AnswerBox>남자, 여자</AnswerBox>
                </GridItemOne>
                <GridItemTwo item>
                  <SubTitle>돌봄 활동</SubTitle>
                  <AnswerBox>놀이돌봄, 교육돌봄</AnswerBox>
                  <SubTitle>정기 여부</SubTitle>
                  <AnswerBox>비정기돌봄</AnswerBox>
                  <SubTitle>경력</SubTitle>
                  <AnswerBox>220401~ 아이조아 선생님 근무</AnswerBox>
                  <AnswerBox>210304~210931 영어학원 채점조교</AnswerBox>
                </GridItemTwo>
              </GridContainer>
            </Stack>
            <Stack spacing={2} mt={10}>
              <PresentButton onClick={onClickButton}>연락하기</PresentButton>
            </Stack>
          </Stack>
        </Body>
      </Modal>
    </>
  );
}

const Container = styled(Box)(() => ({
  display: "flex",
  padding: "0px",
}));

const Profilebox = styled(Box)(() => ({
  display: "block",
  padding: "0px 0px 10px 15px",
}));

const BodyField = styled(Box)(() => ({
  padding: "0px",
}));

const GridContainer = styled(Grid)(() => ({
  padding: "0px 0px 40px 0px",
}));

const GridItemOne = styled(Grid)(() => ({
  position: "absolute",
  left: "30px",
}));

const GridItemTwo = styled(Grid)(() => ({
  position: "absolute",
  right: "10px",
}));

const Body = styled(Stack)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "380px",
  height: "500px",
  overflowX: "hidden",
  overflowY: "auto",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 10px 50px rgb(70, 70, 70)",
  padding: "20px 20px 40px 30px",
}));

const CloseButton = styled(Close)(() => ({
  position: "absolute",
  right: 20,
  cursor: "pointer",
  color: "grey",
  fontSize: 26,
  "&:hover": {
    color: "lightgrey",
  },
}));

const SubTitle = styled(Box)(() => ({
  color: "#5D5A88",
  fontWeight: 700,
  fontSize: "16px",
}));

const AnswerBox = styled(Box)(() => ({
  fontSize: 13,
  color: "#87898E",
  paddingBottom: 12,
}));

const PresentButton = styled(Button)(() => ({
  width: 250,
  paddingTop: 12,
  paddingBottom: 12,
  marginTop: 100,
  fontFamily: "PretendardM",
  fontSize: 16,
  fontWeight: 700,
  boxShadow: "none",
  color: "white",
  backgroundColor: "#5D5A88",
  "&:hover": {
    backgroundColor: "#9795B5",
  },
}));

export default TeacherProfileModal;
