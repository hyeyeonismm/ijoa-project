import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Menu, MenuItem, Button } from "@mui/material";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/");
  };

  const handleClickOpen = (event, menu) => {
    setActiveMenu(menu);
    setAnchorEl(event.currentTarget);
  };

  /*const handleClose = () => {
    setActiveMenu(null);
    setAnchorEl(null);
  };*/

  const menus = {
    "돌봄 서비스 신청": ["돌보미 검색", "돌보미 구인"],
    "돌보미 지원": ["돌보미 인증", "돌봄 지원서 등록", "돌봄 서비스 검색"],
    "서비스 문의": ["1:1 문의", "회원 신고", "공지사항"],
  };

  const routes = {
    "돌보미 검색": "/searchteacher",
    "돌보미 구인": "/recruitteacher",
    "돌보미 인증": "/auth",
    "돌봄 지원서 등록": "/applyregister",
    "돌봄 서비스 검색": "/searchcare",
  };

  const handleClose = (item) => {
    setActiveMenu(null);
    setAnchorEl(null);
    // If a submenu item was clicked, navigate to the corresponding route
    if (item) {
      navigate(routes[item]);
    }
  };

  const onClickUser = () => {
    navigate("/mypage");
  };

  return (
    <>
      <Frame>
        <Title onClick={onClickHome}>IJOA</Title>
        <RightContainer>
          <Box>
            {Object.keys(menus).map((menu) => (
              <HeaderButton
                key={menu}
                aria-controls="click-menu"
                aria-haspopup="true"
                onMouseEnter={(e) => handleClickOpen(e, menu)}
              >
                {menu}
              </HeaderButton>
            ))}
          </Box>
          <Box>
            <LoginButton onClick={onClickUser}>회원가입/로그인</LoginButton>
          </Box>
        </RightContainer>

        <DetailMenu
          id="click-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            onMouseLeave: handleClose,
          }}
        >
          {activeMenu &&
            menus[activeMenu].map((item) => (
              <DetailMenuItem key={item} onClick={() => handleClose(item)}>
                {item}
              </DetailMenuItem>
            ))}
        </DetailMenu>
      </Frame>
      <div style={{ height: "80px" }} />
    </>
  );
}

const Frame = styled(Box)(() => ({
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "26px 30px 10px 30px",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
}));

const RightContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingRight: "80px",
}));

const Title = styled(Button)(() => ({
  fontWeight: "700",
  paddingLeft: "80px",
  textAlign: "left",
  fontFamily: "PretendardB",
  fontSize: 22,
  color: "#5D5A88",
}));

const DetailMenu = styled(Menu)(() => ({
  "& .MuiMenu-paper": {
    width: "155px",
    height: "115px",
    borderRadius: "12px",
  },
}));

const DetailMenuItem = styled(MenuItem)(() => ({
  fontSize: 14,
  color: "#9795B5",
  fontFamily: "DM Sans, sans-serif",
}));

const HeaderButton = styled(Button)(() => ({
  paddingRight: "30px",
  fontFamily: "DM Sans, sans-serif",
  fontSize: 16,
  fontWeight: "bolder",
  color: "#5D5A88",
}));

const LoginButton = styled(Button)(() => ({
  textAlign: "center",
  fontFamily: "DM Sans, sans-serif",
  width: "140px",
  height: "43.78px",
  fontSize: 14,
  fontWeight: "bold",
  backgroundColor: "#5D5A88",
  color: "#FFFFFF",
  borderRadius: "40px",
  "&:hover": {
    backgroundColor: "#8D8BA7",
  },
}));

export default Header;
