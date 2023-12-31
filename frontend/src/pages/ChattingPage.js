import Header from "../components/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, ListItem, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import userprofile from "../images/userprofile.jpg";
import plusicon from "../images/plusIcon.png";
import userprofile2 from "../images/userprofile2.jpg";
import CertificateOfWriteModal from "../components/CertificateOfWriteModal.js";
import CertificateOfConfirmModal from "../components/CertificateOfConfirmModal.js";

function ChatContent({ chatUser }) {
  const [open, setOpen] = useState(false);

  const WriteModalOpen = () => setOpen(true);
  const WriteModalClose = () => setOpen(false);

  const ConfirmModalOpen = () => setOpen(true);
  const ConfirmModalClose = () => setOpen(false);

  return (
    <>
      <section xs={{ display: "flex", flexDirection: "column" }}>
        <Username>
          <Img src={userprofile2} width={40} height={40} alt="userprofile" />
          <UserText>{chatUser}</UserText>
        </Username>
        <ChatBox>
          <Inform>
            {chatUser}님이 7월 15일 (토) 오후 6:15에 <br />
            돌봄확인서 작성을 요청했어요. 돌봄확인서를 작성해주세요.
            <ModalButton onClick={WriteModalOpen}>
              돌봄확인서 작성하기
            </ModalButton>
          </Inform>
          <Inform>
            {chatUser}님이 7월 15일 (토) 오후 6:25에 <br />
            돌봄확인서 확인을 요청했어요. 돌봄확인서를 확인해주세요.
            <ModalButton onClick={ConfirmModalOpen}>
              돌봄확인서 확인하기
            </ModalButton>
          </Inform>
          <Inform>
            돌봄이 확정되었습니다!
            <br />
            보다 구체적인 정보는 마이페이지에서 확인 가능합니다.
            <br />
            불가피하게 돌봄을 취소할 경우, 기한 별로 제재가 가해질 수 있습니다.
          </Inform>
        </ChatBox>
        <ChatInput>
          <IconButton
            sx={{
              margin: 0,
              padding: 0,
              "&:hover": {
                background: "none",
              },
            }}
          >
            <img src={plusicon} width={24} height={24} alt="plusicon" />
          </IconButton>

          <InputChatText type="text" placeholder="메시지를 입력하세요" />
          <SendChat>전송</SendChat>
        </ChatInput>
      </section>
      <CertificateOfWriteModal open={open} handleClose={WriteModalClose} />
      <CertificateOfConfirmModal open={open} handleClose={ConfirmModalClose} />
    </>
  );
}

function ChattingPage() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <>
      <Header />
      <Body>
        <Banner>
          <Box
            sx={{
              color: "#5D5A88",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            Messages ▼<MessageNum>12</MessageNum>
          </Box>
          <SearchField type="text" placeholder="Search messages" />
          <ListItem
            sx={{
              display: "block",
              padding: 0,
            }}
          >
            <ListButton onClick={() => setSelectedChat("강지원")}>
              <Img
                src={userprofile2}
                width={40}
                height={40}
                alt="userprofile"
              />
              <ListText>강지원</ListText>
              <ListTime>12m</ListTime>
            </ListButton>
            <ListButton onClick={() => setSelectedChat("이진형")}>
              <Img src={userprofile} width={40} height={40} alt="userprofile" />
              <ListText>이진형</ListText>
              <ListTime>24m</ListTime>
            </ListButton>
            <ListButton onClick={() => setSelectedChat("황혜주")}>
              <Img src={userprofile} width={40} height={40} alt="userprofile" />
              <ListText>황혜주</ListText>
              <ListTime>1h</ListTime>
            </ListButton>
          </ListItem>
        </Banner>
        <MainGrid>
          {selectedChat ? (
            <ChatContent chatUser={selectedChat} />
          ) : (
            <NoneChat>대화를 시작해보세요!</NoneChat>
          )}
        </MainGrid>
      </Body>
    </>
  );
}

const Img = styled("img")({
  borderRadius: "12px",
  top: "7px",
});

const Username = styled("nav")({
  border: "none",
  background: "none",
  display: "flex",
  alignItems: "flex-start",
  padding: "10px",
  gap: "16px",
  //alignself: "stretch",
  width: "900px",
  height: "52px",
  borderBottom: "1px solid #ddd",
  marginBottom: 40,
});

const UserText = styled(Box)({
  fontSize: "18px",
  width: "230px",
  paddingLeft: 10,
  fontWeight: 700,
  lineHeight: 2,
  textAlign: "left",
});

const ChatBox = styled("box")({
  display: "flex",
  flexDirection: "column",
  //alignself: "stretch",
  width: "900px",
});

const Inform = styled("box")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  padding: "0px 40px 0px 40px",
  margin: 20,
  fontSize: "14px",
  color: "#9795b5",
  width: 800,
});

const ModalButton = styled(Button)({
  width: 170,
  height: 45,
  padding: "8px 16px",
  margin: 20,
  gap: "10px",
  background: "#e1f1f6",
  borderRadius: "12px",
  border: "none",
  "&:hover": {
    opacity: "0.7",
  },
});

const ChatInput = styled("box")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "20px 40px 0px 0px",
  margin: 20,
  width: 900,
  height: 50,
});

const InputChatText = styled("input")({
  display: "flex",
  borderRadius: "12px",
  border: "2px solid #ddd",
  width: 750,
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

const SendChat = styled(Button)(() => ({
  background: "#5D5A88",
  color: "white",
  fontWeight: "700",
  fontSize: "13px",
  width: "60px",
  height: "30px",
  borderRadius: "47px",
  margin: "10px 0px",
  "&:hover": {
    background: "#5D5A88",
  },
}));

const Body = styled("grid")({
  display: "flex",
  width: "100%",
  height: "auto",
});

const SearchField = styled("input")({
  borderRadius: "12px",
  background: "#f3f3f3",
  border: "none",
  height: 38,
  display: "flex",
  padding: "10px 20px",
  margin: "30px 0px 10px 0px",
  gap: 10,
  alignItems: "center",
  alignSelf: "stretch",
  color: "#87898E",
  fontSize: 14,
  "&:focus": {
    outline: "none",
  },
});

const MessageNum = styled("box")({
  borderRadius: 24,
  marginLeft: "10px",
  background: "#edf2f7",
  padding: "2px 8px",
  color: "#5d5a88",
  fontSize: 8,
});

const ListButton = styled("button")({
  border: "none",
  background: "none",
  display: "flex",
  alignItems: "flex-start",
  padding: "10px",
  gap: "16px",
  //alignself: "stretch",
  height: "72px",
  "&:hover": {
    borderRadius: 12,
    background: "rgba(97, 94, 240, 0.06)",
  },
});

const ListText = styled("box")({
  fontSize: "14px",
  width: "230px",
  fontWeight: 700,
  lineHeight: "150%",
  textAlign: "left",
});

const ListTime = styled("grid")({
  fontSize: "12px",
  opacity: "0.3",
  fontWeight: 700,
});

const Banner = styled("grid")({
  display: "flex",
  padding: "70px 0px 0px 80px",
  width: "349px",
  //height: "100%",
  flexDirection: "column",
  alignitems: "center",
});

const MainGrid = styled("grid")({
  display: "flex",
  width: "920px",
  height: "400px",
  padding: "80px 80px 0px 50px",
  flexdirection: "column",
  gap: 32,
});

const NoneChat = styled("grid")({
  fontSize: 30,
  color: "#5d5a88",
  fontWeight: 700,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "900px",
  height: "400px",
  padding: "80px",
  flexdirection: "column",
  gap: 32,
});

export default ChattingPage;
