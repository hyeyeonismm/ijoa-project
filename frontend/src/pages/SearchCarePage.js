import Header from "../components/Header";
import { Box, Grid, Stack, Button, ButtonBase, styled } from "@mui/material";
import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "@mui/joy";
import userprofile from "../images/userprofile.jpg";
import userprofile2 from "../images/userprofile2.jpg";
import SearchAll from "../components/SearchAllModal.js";
import SearchConditional from "../components/SearchConditionalModal.js";

function SearchTeacherPage() {
  const [open, setOpen] = useState(false);
  const [selectedConditional, setSelectedConditional] = useState(false);

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
          내게 딱 맞는 요청을 발견하고
          <br />
          돌봄을 시작해보세요
        </Box>
      </Banner>
      <Tabs defaultValue={1} sx={{ bgcolor: "transparent" }}>
        <SearchTabList>
          <ItemTab value={1} disableIndicator>
            전체보기
          </ItemTab>
          <ItemTab value={2} disableIndicator>
            조건 검색
          </ItemTab>
        </SearchTabList>
        <TabPanel value={1}>
          <SearchAll />
        </TabPanel>
        <TabPanel value={2}>
          <SearchConditional />
        </TabPanel>
      </Tabs>
    </>
  );
}

const Banner = styled(Box)(() => ({
  textAlign: "center",
  padding: "145px 200px 20px 140px",
  fontFamily: "DM Sans, sans-serif",
}));

const SearchTabList = styled(TabList)(() => ({
  gap: 0.1,
  display: "flex",
  justifyContent: "space-around",
  marginLeft: 115,
  padding: "0px 2px",
  borderRadius: 8,
  background: "transparent",
  width: "240px",
  boxShadow: "none",
  fontWeight: 700,
}));

const ItemTab = styled(Tab)(() => ({
  color: "#5d5a88",
  background: "#fff",
  border: "2px solid #5d5a88",
  borderRadius: 20,
  "&.Mui-selected": {
    boxShadow: 10,
    color: "#fff",
    background: "#5d5a88",
    borderBottom: "none",
  },
}));

export default SearchTeacherPage;
