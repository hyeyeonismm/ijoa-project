import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { ListItemButton, Box, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import userprofile from "../images/userprofile.jpg";

function ChattingPage() {
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
            <ListButton>
              <Img src={userprofile} width={40} height={40} alt="userprofile" />
              <ListText>강지원</ListText>
              <ListTime>12m</ListTime>
            </ListButton>
            <ListButton>
              <Img src={userprofile} width={40} height={40} alt="userprofile" />
              <ListText>이진형</ListText>
              <ListTime>24m</ListTime>
            </ListButton>
            <ListButton>
              <Img src={userprofile} width={40} height={40} alt="userprofile" />
              <ListText>황혜주</ListText>
              <ListTime>1h</ListTime>
            </ListButton>
          </ListItem>
        </Banner>
        <MainGrid>
          <NoneChat>대화를 시작해보세요!</NoneChat>
        </MainGrid>
      </Body>
    </>
  );
}

const Img = styled("img")({
  borderRadius: "12px",
  top: "7px",
});

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
  justifyContent: "center",
  alignItems: "center",
  width: "900px",
  height: "400px",
  padding: "80px",
  flexdirection: "column",
  gap: 32,
});

const NoneChat = styled("grid")({
  fontSize: 30,
  color: "#5d5a88",
  fontWeight: 700,
});

export default ChattingPage;
