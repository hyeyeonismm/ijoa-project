import React, {useState, useEffect} from "react";
import {styled, Box, Grid, Stack, Button, ButtonBase} from "@mui/material";
import TeacherProfileModal from "./TeacherProfileModal.js";
import Teachers from "../data/Teachers";

function DetailSchedule() {
  const [selectedRegularity, setSelectedRegularity] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectTeacher, setSelectTeacher] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleItemClick = (teacher) => {
    setSelectTeacher(teacher);
    handleOpen();
  };

  const filteredTeachers = Object.values(Teachers).filter((teacher) => {
    const regularity = teacher?.apply?.[0]?.regularity;
    const day = teacher?.apply?.[0]?.day;
    const time = teacher?.apply?.[0]?.times;
    return (
      selectedRegularity.some((r) => regularity?.includes(r)) || (selectedDays.length === day?.length && selectedDays.every((d) => day?.includes(d))) || selectedTime.some((t) => time?.includes(t))
    );
  });

  return (
    <>
      <SearchBox>
        <Titles>
          <list>긴급/단기/정기</list>
          <list>요일</list>
          <list>시간</list>
        </Titles>

        <Grid sx={{display: "flex", flexDirection: "column", gap: 3, marginLeft: 12}}>
          {["긴급돌봄", "비정기돌봄", "정기돌봄"].map((regularity, index) => (
            <KeyButton
              key={index}
              isSelected={selectedRegularity.includes(regularity)}
              onClick={() => {
                if (selectedRegularity.includes(regularity)) {
                  setSelectedRegularity((prev) => prev.filter((item) => item !== regularity));
                } else {
                  setSelectedRegularity((prev) => [...prev, regularity]);
                }
              }}
            >
              {regularity}
            </KeyButton>
          ))}
        </Grid>

        <Grid sx={{display: "grid", gridTemplateColumns: "auto auto auto auto", marginLeft: 25, gap: 3}}>
          {["월", "화", "수", "목", "금", "토", "일"].map((day, index) => (
            <KeyButton
              key={index}
              isSelected={selectedDays.includes(day)}
              onClick={() => {
                if (selectedDays.includes(day)) {
                  setSelectedDays((prev) => prev.filter((item) => item !== day));
                } else {
                  setSelectedDays((prev) => [...prev, day]);
                }
              }}
            >
              {day}
            </KeyButton>
          ))}
        </Grid>

        <Grid sx={{display: "flex", flexDirection: "column", marginLeft: 19, gap: 3}}>
          {["6시~12시", "12시~18시", "18시~24시"].map((time, index) => (
            <KeyButton
              key={index}
              isSelected={selectedTime.includes(time)}
              onClick={() => {
                if (selectedTime.includes(time)) {
                  setSelectedTime((prev) => prev.filter((item) => item !== time));
                } else {
                  setSelectedTime((prev) => [...prev, time]);
                }
              }}
            >
              {time}
            </KeyButton>
          ))}
        </Grid>
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

const KeyButton = styled(Button)(({isSelected}) => ({
  display: "block",
  width: 100,
  color: "#6C757D",
  height: 30,
  backgroundColor: isSelected ? "rgba(204, 201, 255, 0.35)" : "transparent",
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

export default DetailSchedule;
