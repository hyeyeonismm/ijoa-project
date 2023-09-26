import React, {useState, useEffect} from "react";
import {styled, Box, Grid, Stack, Button, ButtonBase} from "@mui/material";
import TeacherProfileModal from "./TeacherProfileModal.js";
import Teachers from "../data/Teachers";

function CareType() {
  const [selectedCareType, setSelectedCareType] = useState([]);
  const careTypes = ["놀이돌봄", "등하원돌봄", "교육돌봄", "가사돌봄"];
  const [open, setOpen] = useState(false);
  const [selectTeacher, setSelectTeacher] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleItemClick = (teacher) => {
    setSelectTeacher(teacher);
    handleOpen();
  };

  const filteredTeachers = Object.values(Teachers).filter((teacher) => {
    const activities = teacher?.apply?.[0]?.activities;
    return selectedCareType.some((type) => activities && activities.includes(type));
  });

  return (
    <>
      <SearchBox>
        {careTypes.map((type, index) => (
          <KeyButton
            key={index}
            value={type}
            onClick={() => {
              if (selectedCareType.includes(type)) {
                // 선택된 돌봄 타입을 배열에서 제거
                setSelectedCareType((prev) => prev.filter((item) => item !== type));
              } else {
                // 새로운 돌봄 타입을 배열에 추가
                setSelectedCareType((prev) => [...prev, type]);
              }
            }}
          >
            {type}
          </KeyButton>
        ))}
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
  flexDirection: "row",
  padding: "30px 150px",
  justifyContent: "space-between",

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
export default CareType;
