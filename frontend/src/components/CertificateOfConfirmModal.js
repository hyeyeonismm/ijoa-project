import React, {useState} from "react";
import {styled} from "@mui/material/styles";
import {Box, Grid, Stack, Button, Modal, TextField} from "@mui/material";
import Close from "@mui/icons-material/CloseRounded";
import calendar from "../images/icon_calendar.png";
import clock from "../images/icon_clock.png";
import home from "../images/icon_home.png";
import notepad from "../images/icon_notepad.png";
import user from "../images/icon_user.png";

function CertificateOfConfirmModal({open, handleClose}) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    date: "",
    time: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Send this data wherever you want
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Body alignItems="center" spacing={2} sx={{width: "80vh"}}>
          <CloseButton onClick={handleClose} title="닫기" />
          <Stack alignItems="center">
            <Stack spacing={2}>
              <Title>돌봄 확인서</Title>
              <Box
                sx={{
                  textAlign: "center",
                  color: "#87898E",
                  fontSize: "14px",
                }}
              >
                작성된 돌봄확인서를 확인하여 약속을 확정해주세요!
                <br />
                아이조아가 약속에 맞춰 알림을 보내드립니다.
              </Box>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sx={{display: "flex", alignItems: "center"}}>
                    <img src={user} alt="user icon" />
                    <TextField name="writerName" label="작성자 성함" onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6} sx={{display: "flex", alignItems: "center"}}>
                    <img src={user} alt="user icon" />
                    <TextField name="teacherName" label="선생님 성함" onChange={handleChange} />
                  </Grid>

                  <Grid item xs={6} sx={{display: "flex", alignItems: "center"}}>
                    <img src={user} alt="user icon" />
                    <TextField name="genderType" label="성별" onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6} sx={{display: "flex", alignItems: "center"}}>
                    <img src={notepad} alt="notepad icon" sx={{marginRight: 1}} />
                    <TextField name="activityType" label="돌봄 활동 유형" onChange={handleChange} />
                  </Grid>

                  <Grid item xs={6} sx={{display: "flex", alignItems: "center"}}>
                    <img src={calendar} alt="calendar icon" sx={{marginRight: 1}} />
                    <TextField name="startDate" label="돌봄 시작일" type="date" InputLabelProps={{shrink: true}} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6} sx={{display: "flex", alignItems: "center"}}>
                    <img src={calendar} alt="calendar icon" sx={{marginRight: 1}} />
                    <TextField name="endDate" label="돌봄 종료일" type="date" InputLabelProps={{shrink: true}} onChange={handleChange} />
                  </Grid>

                  <Grid item xs={6} sx={{display: "flex", alignItems: "center"}}>
                    <img src={clock} alt="clock icon" sx={{marginRight: 1}} />
                    <TextField name="startTime" label="돌봄 시작 시간" type="time" InputLabelProps={{shrink: true}} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <img src={clock} alt="clock icon" sx={{marginRight: 1}} />
                    <TextField name="endTime" label="돌봄 종료 시간" type="time" InputLabelProps={{shrink: true}} onChange={handleChange} />
                  </Grid>

                  <Grid item xs={12} sx={{display: "flex", alignItems: "center"}}>
                    <img src={home} alt="home icon" sx={{marginRight: 1}} />
                    <TextField name="place" label="돌봄 장소" onChange={handleChange} />
                  </Grid>

                  <Grid item xs={12} sx={{display: "flex", alignItems: "center"}}>
                    <img src={home} alt="home icon" sx={{marginRight: 1}} />
                    <TextField name="place" label="돌봄 장소" onChange={handleChange} />
                  </Grid>
                </Grid>
              </form>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button type="submit" style={{width: "120px", background: "#5d5a88", color: "#fff", fontWeight: 700}}>
                    확인하기
                  </Button>
                </Grid>
                <Grid item>
                  <Button style={{width: "120px", color: "#5d5a88", border: "1px solid #5a5d88"}}>거절하기</Button>
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Body>
      </Modal>
    </>
  );
}

const Title = styled(Box)(() => ({
  padding: "30px 0px 10px 0px",
  textAlign: "center",
  margin: 0,
  fontWeight: 700,
  color: "#5D5A88",
  fontSize: 28,
}));

const Img = styled("img")({
  display: "flex",
  width: 34,
  height: 34,
  alignSelf: "center",
});

const Body = styled(Stack)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "480px",
  height: "600px",
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

export default CertificateOfConfirmModal;
