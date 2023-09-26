import Header from "../components/Header";
import TeacherProfileModal from "../components/TeacherProfileModal.js";
import { Box, Grid, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import userprofile from "../images/userprofile.jpg";
import userprofile2 from "../images/userprofile2.jpg";

function ConditionalSearch() {
  return (
    <>
      <ConditionalStack></ConditionalStack>
    </>
  );
}

function SearchCarePage() {
  const [open, setOpen] = useState(false);
  const [selectedConditional, setSelectedConditional] = useState(false);

  const navigate = useNavigate();
  // const onClickCheck = () => {
  //   navigate("/chatting");
  // };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConditionalSearchClick = () => {
    setSelectedConditional(true);
  };

  const handleViewAllClick = () => {
    setSelectedConditional(false);
  };

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
          내게 딱 맞는 요청을 발견하고 <br />
          돌봄을 시작해보세요
        </Box>
      </Banner>

      <OptionStack direction="row" alignItems="center">
        <Option onClick={handleViewAllClick}>전체보기</Option>
        <Option2 onClick={handleConditionalSearchClick}>조건 검색</Option2>
      </OptionStack>
      {selectedConditional ? (
        <ConditionalSearch />
      ) : (
        <ListStack>
          <Grid container sx={{ textAlign: "center", color: "#5D5A88" }}>
            <ListHeader item xs={1}>
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
          <ListItem container>
            <ListSubItem item xs={1}>
              <Img src={userprofile} width={38} height={40} alt="userprofile" />
            </ListSubItem>
            <ListSubItem item xs={2}>
              강민정
            </ListSubItem>
            <ListSubItem item xs={2}>
              서울특별시 강남구
            </ListSubItem>
            <ListSubItem item xs={3}>
              태권도 학원에서 집까지 등하...
            </ListSubItem>
            <ListSubItem item xs={2}>
              요일 협의
            </ListSubItem>
            <ListSubItem item xs={2}>
              <ApplyButton onClick={handleOpen}>신청하기</ApplyButton>
            </ListSubItem>
          </ListItem>

          <ListItem container>
            <ListSubItem item xs={1}>
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
              35개월 남아 놀이 돌봄 구합 ...
            </ListSubItem>
            <ListSubItem item xs={2}>
              월 화 수 목 금
            </ListSubItem>
            <ListSubItem item xs={2}>
              <ApplyButton onClick={handleOpen}>신청하기</ApplyButton>
            </ListSubItem>
          </ListItem>

          <ListItem container>
            <ListSubItem item xs={1}>
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
              급하게 일정이 생겨서 케어가 가 ...
            </ListSubItem>
            <ListSubItem item xs={2}>
              월 수 금
            </ListSubItem>
            <ListSubItem item xs={2}>
              <ApplyButton onClick={handleOpen}>신청하기</ApplyButton>
            </ListSubItem>
          </ListItem>

          {/* 페이지 */}
          <Stack direction="row" justifyContent="center" xs={2}>
            <Box sx={{ padding: "10px", color: "#5D5A88" }}>1</Box>
            <Box sx={{ padding: "10px" }}>2</Box>
            <Box sx={{ padding: "10px" }}>3</Box>
            <Box sx={{ padding: "10px" }}>4</Box>
            <Box sx={{ padding: "10px" }}>5</Box>
          </Stack>
        </ListStack>
      )}
      <TeacherProfileModal open={open} handleClose={handleClose} />
    </>
  );
}

const ConditionalStack = styled(Stack)(() => ({
  margin: "40px 100px 0px 100px",
}));
const Banner = styled(Box)(() => ({
  textAlign: "center",
  padding: "145px 200px 20px 140px",
  fontFamily: "DM Sans, sans-serif",
}));

const OptionStack = styled(Stack)(() => ({
  justifyContent: "start",
  paddingLeft: "100px",
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
  margin: "40px 100px 0px 100px",
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
  fontSize: "13px",
}));

const ListSubItem = styled(Grid)(() => ({
  textAlign: "center",
  lineHeight: "50px",
  padding: "10px",
}));

const ApplyButton = styled(Button)(() => ({
  background: "#DC3545",
  color: "white",
  fontSize: "13px",
  width: "80px",
  borderRadius: "25px",
  margin: "0px",
  padding: "5px",
  "&:hover": {
    background: "#DC3545",
    opacity: "0,3",
  },
}));
const MainGrid = styled("grid")({
  display: "flex",
  width: "920px",
  height: "400px",
  padding: "80px 80px 0px 50px",
  flexdirection: "column",
  gap: 32,
});

export default SearchCarePage;
