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

function CertificateOfCareModal({ open, handleClose }) {
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
                  color: "#87898E",
                  fontSize: "14px",
                }}
              >
                돌봄 확인서를 작성하여 약속을 확정해주세요!
                <br />
                아이조아가 약속에 맞춰 알림을 보내드립니다.
              </Box>
              <Container></Container>
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

const Title = styled(Box)(() => ({
  padding: "30px 0px 10px 0px",
  textAlign: "center",
  margin: 0,
  fontWeight: 700,
  color: "#5D5A88",
  fontSize: 28,
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

export default CertificateOfCareModal;
