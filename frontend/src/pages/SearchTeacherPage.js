import Header from "../components/Header";
import { Box, Grid, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import React, { useState } from "react";

function SearchTeacherPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header />
      <Banner>
        <Box
          sx={{
            color: "#5D5A88",
            fontSize: "24px",
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
          <ListHeader item xs={1}>
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
          <ListHeader item xs={2}>
            Rating
          </ListHeader>
        </Grid>

        <ButtonBase onClick={handleOpen}>
          <ListItem container>
            <ListSubItem
              item
              xs={1.5}
              sx={{ fontFamily: "PretendardM", color: "#0094FF" }}
            >
              프사
            </ListSubItem>
            <ListSubItem item xs={1}>
              이진형
            </ListSubItem>
            <ListSubItem item xs={2}>
              서울특별시 강남구
            </ListSubItem>
            <ListSubItem item xs={3}>
              정기적으로 시터일을 하고있는 ...
            </ListSubItem>
            <ListSubItem item xs={2}>
              월 수 금
            </ListSubItem>
            <ListSubItem item xs={2}>
              3.5
            </ListSubItem>
          </ListItem>
        </ButtonBase>

        <ListItem container>
          <ListSubItem
            item
            xs={1.5}
            sx={{ fontFamily: "PretendardM", color: "#0094FF" }}
          >
            프사
          </ListSubItem>
          <ListSubItem item xs={1}>
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
          <ListSubItem item xs={2}>
            4.7
          </ListSubItem>
        </ListItem>

        <ListItem container>
          <ListSubItem
            item
            xs={1.5}
            sx={{ fontFamily: "PretendardM", color: "#0094FF" }}
          >
            프사
          </ListSubItem>
          <ListSubItem item xs={1}>
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
          <ListSubItem item xs={2}>
            4.9
          </ListSubItem>
        </ListItem>

        {/* 페이지 */}
        <Stack direction="row" justifyContent="center" xs={2}>
          <Box sx={{ padding: "10px", color: "#0094FF" }}>1</Box>
          <Box sx={{ padding: "10px" }}>2</Box>
          <Box sx={{ padding: "10px" }}>3</Box>
          <Box sx={{ padding: "10px" }}>4</Box>
          <Box sx={{ padding: "10px" }}>5</Box>
        </Stack>
      </ListStack>
    </>
  );
}

const Banner = styled(Box)(() => ({
  textAlign: "center",
  padding: "125px 200px 20px 140px",
  fontFamily: "DM Sans, sans-serif",
}));

const OptionStack = styled(Stack)(() => ({
  justifyContent: "start",
  padding: "20px 0px 20px 80px",
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

const ListStack = styled(Stack)(() => ({
  margin: "40px 0px 0px 40px",
}));

const ListHeader = styled(Grid)(() => ({
  padding: "10px",
  fontSize: "14px",
}));

const ListItem = styled(Grid)(() => ({
  border: "1px solid lightgrey",
  lineHeight: "10px",
  marginBottom: "5px",
}));

const ListSubItem = styled(Grid)(() => ({
  textAlign: "center",
  lineHeight: "50px",
  padding: "10px",
}));

export default SearchTeacherPage;
