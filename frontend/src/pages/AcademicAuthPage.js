import Header from "../components/Header";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

function AcademicAuthPage() {
  return (
    <>
      <Header />
      <Title>학력 서류 등록</Title>
      <Box
        sx={{
          marginLeft: "80px",
          width: "1350px",
          height: "1px",
          background: "#C0C0C0",
          my: 1,
        }}
      />
      ;
    </>
  );
}

const Title = styled(Box)(() => ({
  padding: "80px 0px 10px 80px",
  fontWeight: 700,
  color: "#5D5A88",
  fontSize: 16,
}));

export default AcademicAuthPage;
