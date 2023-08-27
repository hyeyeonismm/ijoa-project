import Header from "../components/Header";
import { Button, Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

function CostPage() {
  return (
    <>
      <Header />
      <Title>돌봄 활동 정산</Title>
      <Box
        sx={{
          marginLeft: "80px",
          width: "1350px",
          height: "1px",
          background: "#C0C0C0",
          my: 1,
        }}
      />
    </>
  );
}
const Title = styled(Box)(() => ({
  padding: "80px 0px 10px 80px",
  fontWeight: 700,
  color: "#5D5A88",
  fontSize: 16,
}));

export default CostPage;
