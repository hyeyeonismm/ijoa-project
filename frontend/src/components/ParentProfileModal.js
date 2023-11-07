import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {styled} from "@mui/material/styles";
import {Box, Grid, Stack, Button, Avatar, Modal} from "@mui/material";
import Close from "@mui/icons-material/CloseRounded";

function ParentProfileModal({open, handleClose, parent}) {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/chatting", {state: {chatUser: parent}});
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Body
          alignItems="center"
          spacing={2}
          sx={{
            height: "75vh",
            boxShadow: 24,
            p: 4,
            borderRadius: 6,
          }}
        >
          <CloseButton onClick={handleClose} title="닫기" />

          <Stack alignItems="center">
            <Stack spacing={2}>
              <Container>
                <Avatar sx={{marginTop: 1.2}} />
                <Profilebox>
                  <Box>{parent.name}</Box>
                  <Box sx={{fontSize: "12px", color: "#87898E"}}>{`${parent.apply[0].address.city}특별시 ${parent.apply[0].address.region} ${parent.apply[0].address.subregion}`}</Box>
                </Profilebox>
                <ContactButton onClick={onClickButton}>연락하기</ContactButton>
              </Container>

              <BodyField sx={{fontSize: 14, paddingBottom: 1}}>
                <Box
                  sx={{
                    fontSize: 12,
                    color: "#87898E",
                    paddingBottom: "4px",
                  }}
                >
                  About me
                </Box>
                <Box>{parent.apply[0]?.introduction?.title}</Box>
                <Box sx={{paddingTop: "15px"}}>{parent.apply[0]?.introduction?.content}</Box>
              </BodyField>

              <Grid container sx={{position: "absolute", top: 320}}>
                <Grid item>
                  <SubTitle>희망 요일</SubTitle>
                  <AnswerBox>{parent.apply[0]?.day.join(", ")}</AnswerBox>

                  <SubTitle>희망 시간대</SubTitle>
                  <AnswerBox>{parent.apply[0]?.time.join(", ")}</AnswerBox>

                  <SubTitle>아이 연령</SubTitle>
                  <AnswerBox>{parent.apply[0]?.age.join(", ")}</AnswerBox>

                  <SubTitle>아이 성별</SubTitle>
                  <AnswerBox>{parent.apply[0]?.gender}</AnswerBox>
                </Grid>

                <Grid item sx={{position: "absolute", right: 50}}>
                  <SubTitle>돌봄 활동</SubTitle>
                  <AnswerBox>{parent.apply[0]?.activities.join(", ")}</AnswerBox>

                  <SubTitle>정기 여부</SubTitle>
                  <AnswerBox>{parent.apply[0]?.regularity.join(", ")}</AnswerBox>

                  <SubTitle>경력</SubTitle>
                  <AnswerBox>220401~ 아이조아 선생님 근무</AnswerBox>
                  <AnswerBox>210304~210931 영어학원 채점조교</AnswerBox>
                </Grid>
              </Grid>
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
  padding: "10px 0px 10px 15px",
}));

const ContactButton = styled(Button)(() => ({
  display: "flex",
  width: 120,
  height: 36,
  margin: "20px 0px 0px 46px",
  fontSize: 14,
  fontWeight: 700,
  boxShadow: "none",
  color: "white",
  backgroundColor: "#5D5A88",
  "&:hover": {
    backgroundColor: "#9795B5",
  },
}));

const BodyField = styled(Box)(() => ({
  padding: "0px",
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

export default ParentProfileModal;
