import React, {useState, useEffect} from "react";
import {styled, Box, Grid, Stack, Button, ButtonBase} from "@mui/material";
import UserProfileModal from "./UserProfileModal.js";
import Teachers from "../data/Teachers.js";
import Parents from "../data/Parents.js";
import Cities from "../data/Cities.js";

function Region({userType}) {
  const defaultCity = "서울";
  const [selectedCity, setselectedCity] = useState(defaultCity);
  const [selectedRegion, setselectedRegion] = useState();
  const [selectedSubregion, setselectedSubregion] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setselectedUser] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleItemClick = (user) => {
    setselectedUser(user);
    handleOpen();
  };

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setFilteredUsers(
      Object.values(userType === "teacher" ? Teachers : Parents).filter((user) => {
        const address = user?.apply?.[0]?.address;
        return address?.city === selectedCity && address?.region === selectedRegion && (selectedSubregion.length === 0 || selectedSubregion.includes(address?.subregion));
      })
    );
  }, [userType, selectedCity, selectedRegion, selectedSubregion]);

  return (
    <>
      <SearchBox>
        <Titles sx={{padding: "0px 100px", margin: " 0px 30px", color: "#6c757d"}}>
          <list>시/도</list>
          <list>구/군</list>
          <list>읍/면/동</list>
          <list>지역은 최대 5개까지 선택 가능합니다.</list>
        </Titles>

        <Box sx={{display: "flex", justifyContent: "space-between", flexWrap: "nowrap", padding: "20px 93px", maxHeight: 200}}>
          <Grid>
            <KeyButton isSelected={true} value={defaultCity} onClick={() => setselectedCity(defaultCity)}>
              {defaultCity}
            </KeyButton>
          </Grid>

          <Grid sx={{display: "flex", flexWrap: "wrap", overflowY: "scroll", width: 380, paddingLeft: 12, gap: 2}}>
            {selectedCity &&
              Cities[selectedCity].regions.map((region, index) => (
                <KeyButton
                  isSelected={selectedRegion === region}
                  key={index}
                  value={region}
                  onClick={() => {
                    setselectedRegion(region);
                  }}
                >
                  {region}
                </KeyButton>
              ))}
          </Grid>

          <Grid sx={{display: "flex", flexWrap: "wrap", overflowY: "scroll", width: 340, paddingLeft: 4, gap: 2}}>
            {selectedCity &&
              selectedRegion &&
              Cities[selectedCity].subregions[selectedRegion].map((sr, index) => (
                <KeyButton
                  isSelected={selectedSubregion.includes(sr)}
                  key={index}
                  value={sr}
                  onClick={() => {
                    if (selectedSubregion.includes(sr)) {
                      setselectedSubregion((prev) => prev.filter((sub) => sub !== sr));
                    } else {
                      if (selectedSubregion.length < 5) {
                        setselectedSubregion((prev) => [...prev, sr]);
                        // setSubregion(sr); // 선택된 subregion을 subregion 상태로 설정
                      }
                    }
                  }}
                >
                  {sr}
                </KeyButton>
              ))}
          </Grid>

          <Grid
            sx={{
              width: 250,
              margin: 0,
              padding: "0px 0px 100px 20px",
              flexWrap: "wrap",
            }}
          >
            {selectedSubregion.map((sr, index) => (
              <Button
                sx={{display: "flex", flexDirection: "row", cursor: "pointer", color: "#6c757d"}}
                key={index}
                onDoubleClick={() => {
                  setselectedSubregion((prev) => prev.filter((subregion) => subregion !== sr));
                }}
              >
                {sr}
              </Button>
            ))}
          </Grid>
        </Box>
      </SearchBox>
      <Stack sx={{margin: "40px 0px"}}>
        <Grid container sx={{textAlign: "center", color: "#5d5a88"}}>
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
          <ListHeader item xs={1.5}>
            {userType === "teacher" ? "Rating" : "Apply"}
          </ListHeader>
        </Grid>

        {filteredUsers.map((user, index) => (
          <ButtonBase key={index} onClick={() => handleItemClick(user)}>
            <Grid container key={index}>
              <ListItem item xs={1.5}>
                profile
              </ListItem>
              <ListItem item xs={2}>
                {user.name}
              </ListItem>
              <ListItem item xs={2}>
                {`${user.apply[0].address.city}특별시 ${user.apply[0].address.region} ${user.apply[0].address.subregion}`}
              </ListItem>
              <ListItem item xs={3}>
                {user.apply[0]?.introduction?.title}
              </ListItem>
              <ListItem item xs={2}>
                {user.apply[0]?.day.join(", ")}
              </ListItem>
              <ListItem item xs={1.5}>
                {userType === "teacher" ? (
                  user.rating
                ) : (
                  <span
                    role="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleItemClick(filteredUsers[index]);
                    }}
                    style={{
                      cursor: "pointer",
                      color: "#fff",
                      background: "#DC3545",
                      padding: "8px 15px",
                      borderRadius: 20,
                    }}
                  >
                    신청하기
                  </span>
                )}
              </ListItem>
            </Grid>
          </ButtonBase>
        ))}
      </Stack>
      {open && <UserProfileModal open={open} handleClose={handleClose} user={selectedUser} userType={userType} />}
    </>
  );
}

const SearchBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px 0px 10px 10px",
  marginTop: "2px",
  borderRadius: 8,
  border: "2px solid #CFD3D4",
}));

const Titles = styled(Grid)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingRight: 50,
  paddingLeft: 70,
  color: "#6c757d",
  fontSize: "14px",
}));

const KeyButton = styled(Button)(({isSelected}) => ({
  display: "block",
  width: 100,
  color: "#6C757D",
  height: 30,
  backgroundColor: isSelected ? "rgba(204, 201, 255, 0.35)" : "transparent",
}));

const ListHeader = styled(Grid)(() => ({
  padding: "10px",
  fontSize: "14px",
  borderTop: "1px solid #ddd",
  borderBottom: "1px solid #ddd",
}));

const ListItem = styled(Grid)(() => ({
  fontSize: 14,
  textAlign: "center",
  lineHeight: "30px",
  padding: "10px",
  borderBottom: "1px solid #ddd",
}));

export default Region;
