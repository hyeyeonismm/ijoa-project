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

  const handleClose = () => {
    setActiveMenu(null);
    setAnchorEl(null);
  };

  const menus = {
    "돌봄 서비스 신청": ["돌봄 선생님 검색", "돌봄 선생님 구인"],
    "선생님 지원": ["돌봄 선생님 인증", "돌봄 지원서 등록", "돌봄 서비스 검색"],
    "서비스 문의": ["1:1 문의", "회원 신고", "공지사항"],
  };

  const onClickUser = () => {
    navigate("/login");
  };

  return (
    <Frame>
      <Box>
        <Title onClick={onClickHome}>IJOA</Title>
      </Box>
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

      <Menu
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
            <MenuItem key={item} onClick={handleClose}>
              {item}
            </MenuItem>
          ))}
      </Menu>
    </Frame>
  );
}

const Frame = styled(Box)(() => ({
  display: "flex",
  padding: "5px 30px 5px 20px",
  backgroundColor: "white",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
}));

const Title = styled(Button)(() => ({
  textAlign: "center",
  fontFamily: "PretendardB",
  fontSize: 22,
  color: "#5D5A88",
  "&:hover": {
    backgroundColor: "transparent",
    color: "grey",
  },
}));

const HeaderButton = styled(Button)(() => ({
  textAlign: "center",
  fontFamily: "DM Sans, sans-serif",
  fontSize: 16,
  fontWeight: "bold", // add this line
  color: "#5D5A88",
  "&:hover": {
    backgroundColor: "transparent",
    color: "grey",
  },
}));

const LoginButton = styled(Button)(() => ({
  textAlign: "center",
  fontFamily: "DM Sans, sans-serif",
  fontSize: 14,
  fontWeight: "bold",
  backgroundColor: "#5D5A88",
  color: "#FFFFFF",
  borderRadius: "15px",
}));

export default Header;
