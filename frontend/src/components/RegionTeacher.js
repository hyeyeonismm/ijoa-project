import React, {useState, useEffect} from "react";
import {styled, Box, Grid, Stack, Button, ButtonBase} from "@mui/material";
import TeacherProfileModal from "./TeacherProfileModal.js";
import Teachers from "../data/Teachers.js";
import Cities from "../data/Cities.js";

function Region(region, subregion) {
  const defaultCity = "서울";
  const [selectCity, setSelectCity] = useState(defaultCity);
  const [selectRegion, setSelectRegion] = useState();
  const [selectSubregion, setSelectSubregion] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectTeacher, setSelectTeacher] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleItemClick = (teacher) => {
    setSelectTeacher(teacher);
    handleOpen();
  };

  const filteredTeachers = Object.values(Teachers).filter((teacher) => {
    const address = teacher?.apply?.[0]?.address;

    return (address?.city === selectCity && address?.region === selectRegion) || selectSubregion.includes(address?.subregion);
  });

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
            <KeyButton isSelected={true} value={defaultCity} onClick={() => setSelectCity(defaultCity)}>
              {defaultCity}
            </KeyButton>
          </Grid>

          <Grid sx={{display: "flex", flexWrap: "wrap", overflowY: "scroll", width: 380, paddingLeft: 12, gap: 2}}>
            {selectCity &&
              Cities[selectCity].regions.map((region, index) => (
                <KeyButton
                  isSelected={selectRegion === region}
                  key={index}
                  value={region}
                  onClick={() => {
                    setSelectRegion(region);
                  }}
                >
                  {region}
                </KeyButton>
              ))}
          </Grid>

          <Grid sx={{display: "flex", flexWrap: "wrap", overflowY: "scroll", width: 340, paddingLeft: 4, gap: 2}}>
            {selectCity &&
              selectRegion &&
              Cities[selectCity].subregions[selectRegion].map((sr, index) => (
                <KeyButton
                  isSelected={selectSubregion.includes(sr)}
                  key={index}
                  value={sr}
                  onClick={() => {
                    if (selectSubregion.includes(sr)) {
                      setSelectSubregion((prev) => prev.filter((sub) => sub !== sr));
                    } else {
                      if (selectSubregion.length < 5) {
                        setSelectSubregion((prev) => [...prev, sr]);
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
            {selectSubregion.map((sr, index) => (
              <Button
                sx={{display: "flex", flexDirection: "row", cursor: "pointer", color: "#6c757d"}}
                key={index}
                onDoubleClick={() => {
                  setSelectSubregion((prev) => prev.filter((subregion) => subregion !== sr));
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
            Rating
          </ListHeader>
        </Grid>

        {filteredTeachers.map((teacher, index) => (
          <ButtonBase key={index} onClick={() => handleItemClick(teacher)}>
            <Grid container key={index}>
              <ListItem item xs={1.5}>
                profile
              </ListItem>
              <ListItem item xs={2}>
                {teacher.name}
              </ListItem>
              <ListItem item xs={2}>
                {`${teacher.apply[0].address.city}특별시 ${teacher.apply[0].address.region} ${teacher.apply[0].address.subregion}`}
              </ListItem>
              <ListItem item xs={3}>
                {teacher.apply[0]?.introduction?.title}
              </ListItem>
              <ListItem item xs={2}>
                {teacher.apply[0]?.day.join(", ")}
              </ListItem>
              <ListItem item xs={1.5}>
                {teacher.rating}
              </ListItem>
            </Grid>
          </ButtonBase>
        ))}
      </Stack>
      {open && <TeacherProfileModal open={open} handleClose={handleClose} teacher={selectTeacher} />}{" "}
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
