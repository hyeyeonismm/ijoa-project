import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Button,
  Box,
  ListItem,
  IconButton,
  Badge,
  styled,
  Avatar,
} from "@mui/material";
import plusicon from "../images/plusIcon.png";
import CertificateOfWriteModal from "../components/CertificateOfWriteModal.js";
import CertificateOfConfirmModal from "../components/CertificateOfConfirmModal.js";
import Parents from "../data/Parents";
import Teachers from "../data/Teachers";
import Chats from "../data/Chats";

function ChattingPage() {
  const location = useLocation();
  const [selectedChat, setSelectedChat] = useState(location.state?.chatUser);
  const user = Teachers["hyeyeon"];
  const [chatUserToPass, setChatUserToPass] = useState(null);

  const chatUsers = Object.keys(Chats["김혜연"]);

  return (
    <>
      <Header />
      <Body>
        <Banner>
          <Box
            sx={{
              color: "#5D5A88",
              paddingLeft: 1,
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            <Badge badgeContent={4} color="primary" sx={{ paddingRight: 1 }}>
              {user.name}님의 Message
            </Badge>
          </Box>
          <SearchField type="text" placeholder="Search messages" />
          <ListItem
            sx={{
              display: "block",
              padding: 0,
            }}
          >
            {chatUsers.map((chatUser) => (
              <ListButton
                key={chatUser}
                onClick={() => {
                  setSelectedChat(chatUser);
                  setChatUserToPass(chatUser); // 이 줄을 추가해주세요.
                }}
              >
                <Avatar />
                <ListText>{chatUser}</ListText>
              </ListButton>
            ))}
          </ListItem>
        </Banner>
        <MainGrid>
          {selectedChat ? (
            <ChatContent user={user.name} chatUser={chatUserToPass} />
          ) : (
            <NoneChat>대화를 시작해보세요!</NoneChat>
          )}
        </MainGrid>
      </Body>
    </>
  );
}

function ChatContent({ user, chatUser }) {
  const [open, setOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState(
    Chats[user]?.[chatUser] || []
  );

  useEffect(() => {
    setChatMessages(Chats[user]?.[chatUser] || []);
  }, [chatUser, user]);
  const WriteModalOpen = () => setOpen(true);
  const WriteModalClose = () => setOpen(false);

  const ConfirmModalOpen = () => setOpen(true);
  const ConfirmModalClose = () => setOpen(false);

  return (
    <>
      <section xs={{ display: "flex", flexDirection: "column" }}>
        <Username>
          <Avatar />
          <UserText>{chatUser}</UserText>
        </Username>
        <ChatBox>
          {chatMessages &&
            chatMessages.map((message, index) => (
              <Inform
                key={index}
                className={
                  message.sender === user ? "sender-right" : "sender-left"
                }
              >
                {message.text}
                {/* {message.timestamp} */}
              </Inform>
            ))}
          <Notice>
            {chatUser}님이 7월 15일 (토) 오후 6:15에 <br />
            돌봄확인서 작성을 요청했어요. 돌봄확인서를 작성해주세요.
            <ModalButton onClick={WriteModalOpen}>
              돌봄확인서 작성하기
            </ModalButton>
          </Notice>
          <Notice>
            {user}님이 7월 15일 (토) 오후 6:25에 <br />
            돌봄확인서 확인을 요청했어요. 돌봄확인서를 확인해주세요.
            <ModalButton onClick={ConfirmModalOpen}>
              돌봄확인서 확인하기
            </ModalButton>
          </Notice>
          <Notice>
            돌봄이 확정되었습니다!
            <br />
            보다 구체적인 정보는 마이페이지에서 확인 가능합니다.
            <br />
            불가피하게 돌봄을 취소할 경우, 기한 별로 제재가 가해질 수 있습니다.
          </Notice>
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
const Inform = styled("div")(({ theme }) => ({
  padding: "10px",
  borderRadius: "5px",
  margin: "5px",
  maxWidth: "70%",
  display: "inline-block",
  fontSize: 14,

  "&.sender-left": {
    backgroundColor: "rgba(241, 241, 241, 1)",
    color: "rgba(0,0,0,1)",
    alignSelf: "flex-start",
  },
  "&.sender-right": {
    backgroundColor: "rgba(93, 90, 136, 0.70)",
    color: "white",
    alignSelf: "flex-end",
  },
}));

const ChatBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginBottom: 10,
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

// const Notice = styled("box")({
//   display: "flex",
//   flexDirection: "column",
//   //alignself: "stretch",
//   width: "900px",
// });

const Notice = styled("box")({
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
  margin: "15px 0px 10px 0px",
  alignItems: "center",
  color: "#87898E",
  fontSize: 14,
  "&:focus": {
    outline: "none",
  },
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
