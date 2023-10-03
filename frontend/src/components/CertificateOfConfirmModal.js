import React, {useState} from "react";
import {styled} from "@mui/material/styles";
import DaumPostCode from "react-daum-postcode";
import {Box, Grid, Stack, Button, Modal, TextField} from "@mui/material";
import Close from "@mui/icons-material/CloseRounded";
import calendar from "../images/icon_calendar.png";
import clock from "../images/icon_clock.png";
import home from "../images/icon_home.png";
import notepad from "../images/icon_notepad.png";
import user from "../images/icon_user.png";

function CertificateOfConfirmModal({open, handleClose: parentHandleClose}) {
  const [address, setAddress] = useState("");
  const [postcodeOpen, setPostcodeOpen] = useState(false);
  const [formData, setFormData] = useState();

  const handleClose = () => {
    parentHandleClose();
    setFormData({
      name: "",
      date: "",
      time: "",
      place: "",
    });
    setAddress("");
  };

  const handleAddress = (data) => {
    setAddress(data.address);
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setFormData((prevData) => ({
      ...prevData,
      address: fullAddress,
    }));

    setPostcodeOpen(false);
  };

  const OpenMaps = () => {
    setPostcodeOpen(true);
  };

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
        <Body alignItems="center" spacing={2} sx={{width: "70vh"}}>
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
                돌봄 확인서를 작성하여 약속을 확정해주세요!
                <br />
                아이조아가 약속에 맞춰 알림을 보내드립니다.
              </Box>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <StyledGridItem item xs={6}>
                    <Img src={user} alt="user icon" />
                    <TextField name="writerName" label="작성자 성함" onChange={handleChange} />
                  </StyledGridItem>
                  <StyledGridItem item xs={6}>
                    <Img src={user} alt="user icon" />
                    <TextField name="teacherName" label="선생님 성함" onChange={handleChange} />
                  </StyledGridItem>

                  <StyledGridItem item xs={6}>
                    <Img src={user} alt="user icon" />
                    <TextField name="genderType" label="성별" onChange={handleChange} />
                  </StyledGridItem>
                  <StyledGridItem item xs={6}>
                    <Img src={notepad} alt="notepad icon" />
                    <TextField name="activityType" label="돌봄 활동 유형" onChange={handleChange} />
                  </StyledGridItem>

                  <StyledGridItem item xs={6}>
                    <Img src={calendar} alt="calendar icon" />
                    <TextField name="startDate" label="돌봄 시작일" type="date" sx={{width: 300}} InputLabelProps={{shrink: true}} onChange={handleChange} />
                  </StyledGridItem>
                  <StyledGridItem item xs={6}>
                    <Img src={calendar} alt="calendar icon" />
                    <TextField name="endDate" label="돌봄 종료일" type="date" sx={{width: 300}} InputLabelProps={{shrink: true}} onChange={handleChange} />
                  </StyledGridItem>

                  <StyledGridItem item xs={6}>
                    <Img src={clock} alt="clock icon" />
                    <TextField name="startTime" label="돌봄 시작 시간" type="time" sx={{width: 300}} InputLabelProps={{shrink: true}} onChange={handleChange} />
                  </StyledGridItem>
                  <StyledGridItem item xs={6}>
                    <Img src={clock} alt="clock icon" />
                    <TextField name="endTime" label="돌봄 종료 시간" type="time" sx={{width: 300}} InputLabelProps={{shrink: true}} onChange={handleChange} />
                  </StyledGridItem>

                  <StyledGridItem item xs={12}>
                    <Img src={home} alt="home icon" />
                    <TextField
                      name="place"
                      label="돌봄 장소"
                      sx={{width: 325}}
                      value={address}
                      InputProps={{
                        readOnly: true,
                      }}
                    />

                    <Button style={{width: "120px", height: 52, background: "#5d5a88", color: "#fff", fontWeight: 700}} onClick={OpenMaps}>
                      우편번호 찾기
                    </Button>
                  </StyledGridItem>

                  <StyledGridItem item xs={12}>
                    <Img src={home} alt="home icon" />
                    <TextField
                      name="place"
                      label="돌봄 장소"
                      sx={{
                        width: 452,
                      }}
                      onChange={handleChange}
                    />
                  </StyledGridItem>
                </Grid>
              </form>
              <Grid container spacing={2} justifyContent="center">
                <Grid item sx={{paddingRight: 3}}>
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
      <Modal open={postcodeOpen} onClose={() => setPostcodeOpen(false)}>
        <div
          style={{
            width: "400px",
            height: "450px",
            padding: "20px",
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",

            fontSize: 18,
            fontWeight: 700,
            color: "#4e4e4e",
          }}
        >
          우편번호 찾기
          <DaumPostCode onComplete={handleAddress} />
        </div>
      </Modal>
    </>
  );
}

const Title = styled(Box)(() => ({
  paddingTop: "18px",
  textAlign: "center",
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
  overflowY: "auto",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 10px 50px rgb(70, 70, 70)",
  padding: "20px 30px 40px 25px",
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

const StyledGridItem = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",

  gap: 8,
}));

export default CertificateOfConfirmModal;
