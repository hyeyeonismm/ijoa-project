import Header from "../components/Header";
import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import main from "../images/main1.png";

function MainPage() {
  const navigate = useNavigate();

  const items = {
    Home: "/",
    About: "#",
    "Register with us": "#",
    "Privacy Policy": "#",
    "Terms & Conditions": "#",
  };

  const onClickList = (route) => {
    return () => {
      navigate(route);
    };
  };
  return (
    <>
      <Header />

      <Banner container>
        <Section item xs={6}>
          <Box
            sx={{
              color: "#8D8BA7",
              fontSize: "16px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            공동체 가족을 위한 공유형 육아 플랫폼
          </Box>
          <Box
            sx={{
              color: "#5D5A88",
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "3px",
            }}
          >
            함께 웃는 돌봄의 시작,
          </Box>
          <Box sx={{ color: "#5D5A88", fontSize: "28px", fontWeight: "700" }}>
            아이조아와 함께하세요!
          </Box>
          <Box sx={{ color: "#9795B5", fontSize: "14px", marginTop: "20px" }}>
            아이조아는 철저한 검증 과정을 통해 선발된 돌보미들과 함께 <br />
            다양한 돌봄 서비스를 제공합니다.
          </Box>
        </Section>
        <Grid itm xs={6}>
          <Box>
            <img src={main} width={580} height={412} alt="main" />
          </Box>
        </Grid>
      </Banner>
      <Footer sx={{ backgroundColor: "rgba(93, 90, 136, 0.3)" }}>
        <Box sx={{ fontWeight: "bold" }}>Quick Links</Box>
        <Styledul>
          {Object.entries(items).map(([label, route]) => (
            <li key={label} onClick={onClickList(route)}>
              {label}
            </li>
          ))}
        </Styledul>
      </Footer>
    </>
  );
}

const Banner = styled(Grid)(() => ({
  padding: "85px 200px 10px 200px",
  fontFamily: "DM Sans, sans-serif",
  "& img": {
    borderRadius: "40px",
  },
}));

const Section = styled(Box)(() => ({
  textAlign: "center",
  padding: "100px 50px",
  marginRight: "30px",
}));

const Footer = styled(Grid)(() => ({
  marginTop: "50px",
  color: "#8D8BA7",
  padding: "20px 0px 10px 80px",
}));

const Styledul = styled("ul")(() => ({
  fontSize: "14px",
  listStyle: "none",
  padding: "5",
  "&:hover": {
    cursor: "pointer",
  },
  "& li": {
    color: "white",
    paddingRight: "60px",
    display: "inline-Block",
    //marginBottom: "10px",
  },
}));
export default MainPage;
