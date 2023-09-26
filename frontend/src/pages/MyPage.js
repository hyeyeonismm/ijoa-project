//import { Container } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Grid, Button, Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import userprofile from "../images/userprofile.jpg";

function MyPage() {
  const navigate = useNavigate();
  const onClickCheck = () => {
    navigate("/chatting");
  };

  const onClickCost = () => {
    navigate("/cost");
  };

  return (
    <>
      <Header />
      <Profile>
        <Img src={userprofile} width={130} height={130} alt="userprofile" />
      </Profile>
      <Box
        sx={{
          margin: "10px 120px",
          width: "1280px",
          height: "1px",
          background: "#C0C0C0",
        }}
      />
      <Container>
        <Section>
          <SectionTitle>돌봄 서비스 신청 관리</SectionTitle>
          <ListItem>
            <ListSubItem>돌봄 서비스 신청 및 관리</ListSubItem>
            <ListSubItem>돌봄 서비스 요청 현황 확인</ListSubItem>
          </ListItem>
        </Section>
        <Section>
          <SectionTitle>돌봄 내역 조회</SectionTitle>
          <ListItem>
            <ListSubItem onClick={onClickCheck}>돌봄 내역 조회</ListSubItem>
          </ListItem>
        </Section>
        <Section>
          <SectionTitle>돌봄 활동 정산</SectionTitle>
          <ListItem>
            <ListSubItem onClick={onClickCost}>돌봄 활동 정산</ListSubItem>
          </ListItem>
        </Section>
      </Container>
      <Footer />
    </>
  );
}

const Profile = styled(Box)({
  margin: "180px 0px 10px 120px",
});

const Img = styled("img")({
  borderRadius: "100px",
  marginLeft: 20,
  marginBottom: 6,
});

const Container = styled(Box)({
  margin: "0px 140px 10px 120px",
  display: "flex",
  justifyContent: "center",
});

const Section = styled(Box)({
  display: "inline-block",
  border: "1px solid #d4d2e3",
  width: 500,
  height: 160,
  borderRadius: "15px",
  margin: 20,
});

const ListItem = styled(Grid)(() => ({
  paddingBottom: "20px",
}));

const ListSubItem = styled(Grid)(() => ({
  lineHeight: "30px",
  padding: "2px 0px 0px 30px",
  cursor: "pointer",
}));

const SectionTitle = styled(Box)({
  color: "#5d5a88",
  fontWeight: 700,
  padding: 20,
  marginBottom: 10,
});

export default MyPage;
