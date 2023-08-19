import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Stack,
  Button,
  Modal,
  FormGroup,
  FormControl,
  TextField,
  Checkbox,
} from "@mui/material";
import calendar from "../images/icon_calendar.png";
import clock from "../images/icon_clock.png";
import home from "../images/icon_home.png";
import notepad from "../images/icon_notepad.png";
import user from "../images/icon_user.png";
import Close from "@mui/icons-material/CloseRounded";

function CertificateOfCareModal({ open, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    date: "",
    time: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Send this data wherever you want
  };

  //const navigate = useNavigate();
  // const onClickButton = () => {
  //   navigate("/chatting");
  // };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Body alignItems="center" spacing={2}>
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
                <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                  <FormControl sx={{ display: "flex", flexDirection: "row" }}>
                    <Img src={user} alt="usericon" />
                    <InputTextField
                      placeholder="작성자 성함을 입력하세요."
                      variant="outlined"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl sx={{ display: "flex", flexDirection: "row" }}>
                    <Img src={user} alt="usericon" />
                    <InputTextField
                      placeholder="선생님 성함을 입력하세요."
                      variant="outlined"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl sx={{ display: "flex", flexDirection: "row" }}>
                    <Img src={calendar} alt="calendaricon" />
                    <InputTextField
                      placeholder="돌봄시작일을 입력하세요"
                      //variant="outlined"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                  <FormControl sx={{ display: "flex", flexDirection: "row" }}>
                    <Img src={calendar} alt="calendaricon" />
                    <InputTextField
                      placeholder="돌봄종료일을 입력하세요"
                      //variant="outlined"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>

                  <FormControl sx={{ display: "flex", flexDirection: "row" }}>
                    <Img src={clock} alt="clockicon" />
                    <InputTextField
                      placeholder="Time"
                      variant="outlined"
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                  <FormControl sx={{ display: "flex", flexDirection: "row" }}>
                    <Img src={clock} alt="clockicon" />
                    <InputTextField
                      placeholder="Time"
                      variant="outlined"
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>

                  <FormControl sx={{ display: "flex", flexDirection: "row" }}>
                    <Img src={home} alt="homeicon" />
                    <InputTextField
                      placeholder="돌봄이 진행되는 장소를 입력하세요"
                      variant="outlined"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      margin="normal"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          width: 250,
                        },
                      }}
                    />
                  </FormControl>
                  <SearchButton>주소 검색</SearchButton>
                  <Container>
                    <FormControl sx={{ display: "flex", flexDirection: "row" }}>
                      <InputTextField
                        placeholder="상세 주소"
                        variant="outlined"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        margin="normal"
                        sx={{
                          marginTop: 1,
                          "& .MuiOutlinedInput-root": {
                            marginLeft: 4,
                            width: 380,
                          },
                        }}
                      />
                    </FormControl>

                    <FormControl sx={{ display: "flex", flexDirection: "row" }}>
                      <Img src={notepad} alt="notepadicon" />
                      <InputTextField
                        placeholder="돌봄 활동 유형을 입력해주세요"
                        variant="outlined"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        margin="normal"
                        sx={{
                          marginTop: 1,
                          "& .MuiOutlinedInput-root": {
                            width: 380,
                          },
                        }}
                      />
                    </FormControl>

                    <SubmitButton>제출하기</SubmitButton>
                  </Container>
                </FormGroup>
              </form>
            </Stack>
          </Stack>
        </Body>
      </Modal>
    </>
  );
}

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "0px",
}));

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

const SubmitButton = styled(Button)(() => ({
  background: "#5D5A88",
  color: "white",
  fontWeight: "700",
  fontSize: "18px",
  width: "100px",
  height: "50px",
  borderRadius: "50px",
  margin: "35px",
  "&:hover": {
    background: "#5D5A88",
  },
}));

const SearchButton = styled(Button)(() => ({
  background: "#5D5A88",
  color: "white",
  fontWeight: "700",
  fontSize: "14px",
  width: "120px",
  height: "40px",
  borderRadius: "50px",
  margin: "25px 0px 0px 10px",
  "&:hover": {
    background: "#5D5A88",
  },
}));

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

export default CertificateOfCareModal;
