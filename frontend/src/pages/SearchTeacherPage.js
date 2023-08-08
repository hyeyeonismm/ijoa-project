import Header from "../components/Header";
import TeacherProfileModal from "../components/TeacherProfileModal.js";
import { Box, Grid, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import React, { useState } from "react";
import userprofile from "../images/userprofile.jpg";
import userprofile2 from "../images/userprofile2.jpg";

function SearchTeacherPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />
      <Banner>
        <Box
          sx={{
            color: "#5D5A88",
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          우리 아이를 믿고 맡길 <br />
          최적의 선생님을 찾아보세요!
        </Box>
      </Banner>
      <ListStack>
        <OptionStack direction="row" alignItems="center">
          <Option>전체보기</Option>
          <Option2>조건 검색</Option2>
        </OptionStack>
        <Grid container sx={{ textAlign: "center", color: "#5D5A88" }}>
          <ListHeader item xs={1.5}>
            Profile
          </ListHeader>
          <ListHeader item xs={2}>
            Name
          </ListHeader>
          <ListHeader item xs={2}>
            Address
          </ListHeader>
          <ListHeader item xs={3}>
            Title
          </ListHeader>
          <ListHeader item xs={2}>
            Schedule
          </ListHeader>
          <ListHeader item xs={1}>
            Rating
          </ListHeader>
        </Grid>

        <ButtonBase onClick={handleOpen}>
          <ListItem container>
            <ListSubItem item xs={1.5}>
              <Img src={userprofile} width={38} height={40} alt="userprofile" />
            </ListSubItem>
            <ListSubItem item xs={2}>
              이진형
            </ListSubItem>
            <ListSubItem item xs={2}>
              서울특별시 강남구
            </ListSubItem>
            <ListSubItem item xs={3}>
              정기적으로 시터 일을 하고 있...
            </ListSubItem>
            <ListSubItem item xs={2}>
              월 수 금
            </ListSubItem>
            <ListSubItem item xs={1}>
              4.7
            </ListSubItem>
          </ListItem>
        </ButtonBase>
        <ButtonBase onClick={handleOpen}>
          <ListItem container>
            <ListSubItem item xs={1.5}>
              <Img
                src={userprofile2}
                width={38}
                height={40}
                alt="userprofile"
              />
            </ListSubItem>
            <ListSubItem item xs={2}>
              김상준
            </ListSubItem>
            <ListSubItem item xs={2}>
              서울특별시 용산구
            </ListSubItem>
            <ListSubItem item xs={3}>
              안녕하세요! 저는 동국대학교 ...
            </ListSubItem>
            <ListSubItem item xs={2}>
              월 화 수 목 금
            </ListSubItem>
            <ListSubItem item xs={1}>
              4.7
            </ListSubItem>
          </ListItem>
        </ButtonBase>
        <ButtonBase onClick={handleOpen}>
          <ListItem container>
            <ListSubItem item xs={1.5}>
              <Img
                src={userprofile2}
                width={34}
                height={34}
                alt="userprofile"
              />
            </ListSubItem>
            <ListSubItem item xs={2}>
              윤혜진
            </ListSubItem>
            <ListSubItem item xs={2}>
              인천광역시 연수구
            </ListSubItem>
            <ListSubItem item xs={3}>
              상냥하고 착한 육아 고수입니 ...
            </ListSubItem>
            <ListSubItem item xs={2}>
              월 수 금
            </ListSubItem>
            <ListSubItem item xs={1}>
              4.9
            </ListSubItem>
          </ListItem>
        </ButtonBase>
        {/* 페이지 */}
        <Stack direction="row" justifyContent="center" xs={2}>
          <Box sx={{ padding: "10px", color: "#5D5A88" }}>1</Box>
          <Box sx={{ padding: "10px" }}>2</Box>
          <Box sx={{ padding: "10px" }}>3</Box>
          <Box sx={{ padding: "10px" }}>4</Box>
          <Box sx={{ padding: "10px" }}>5</Box>
        </Stack>
      </ListStack>
      <TeacherProfileModal open={open} handleClose={handleClose} />
    </>
  );
}

const Banner = styled(Box)(() => ({
  textAlign: "center",
  padding: "145px 200px 20px 140px",
  fontFamily: "DM Sans, sans-serif",
}));

const OptionStack = styled(Stack)(() => ({
  justifyContent: "start",
  padding: "0px 0px 30px 40px",
}));

const Option = styled(Button)(() => ({
  backgroundColor: "#5D5A88",
  color: "white",
  width: "90px",
  height: "40px",
  borderRadius: "47px",
  "&:hover": {
    backgroundColor: "#5D5A88",
    opacity: "0.5",
  },
}));

const Option2 = styled(Button)(() => ({
  backgroundColor: "white",
  width: "90px",
  height: "40px",
  color: "#5D5A88",
  border: "3px solid #5D5A88",
  borderRadius: "47px",
  marginLeft: 8,
  "&:hover": {
    backgroundColor: "white",
    opacity: "0.5",
  },
}));

const Img = styled("img")({
  borderRadius: "50%",
  position: "relative",
  top: "7px",
});

const ListStack = styled(Stack)(() => ({
  margin: "60px 100px 0px 100px",
}));

const ListHeader = styled(Grid)(() => ({
  padding: "10px",
  fontSize: "14px",
}));

const ListItem = styled(Grid)(() => ({
  borderTop: "1px solid #ddd",
  borderLeft: "1px solid #ddd",
  borderRight: "1px solid #ddd",
  lineHeight: "10px",
}));

const ListSubItem = styled(Grid)(() => ({
  textAlign: "center",
  lineHeight: "50px",
  padding: "10px",
}));

export default SearchTeacherPage;
