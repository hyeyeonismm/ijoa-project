import React, { useState } from "react";
import { styled, Grid, Stack, ButtonBase } from "@mui/material";
import TeacherProfileModal from "./TeacherProfileModal.js";
import Teachers from "../data/Teachers";

function SearchAllModal() {
  const [open, setOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleItemClick = (teacher) => {
    setSelectedTeacher(teacher);
    handleOpen();
  };

  const TeacherFormat = (teacher) => {
    return {
      name: teacher.name,
      adress: `${teacher.apply[0].address.city}특별시 ${teacher.apply[0].address.region} ${teacher.apply[0].address.subregion}`,
      title: teacher.apply[0]?.introduction?.title,
      schedule: teacher.apply[0]?.day.join(", "),
      rating: teacher.rating,
    };
  };
  const teachersArray = Object.values(Teachers);
  const [teacherList, setTeacherList] = useState(
    teachersArray.map((teacher) => TeacherFormat(teacher))
  );

  return (
    <>
      <ListStack>
        <Grid
          container
          sx={{
            textAlign: "center",
            color: "#5D5A88",
          }}
        >
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

        {teacherList.map((teacher, index) => (
          <ButtonBase
            key={index}
            onClick={() => handleItemClick(teachersArray[index])}
          >
            <Grid container key={index}>
              <ListSubItem item xs={1.5}>
                profile
              </ListSubItem>
              <ListSubItem item xs={2}>
                {teacher.name}
              </ListSubItem>
              <ListSubItem item xs={2}>
                {teacher.adress}
              </ListSubItem>
              <ListSubItem item xs={3}>
                {teacher.title}
              </ListSubItem>
              <ListSubItem item xs={2}>
                {teacher.schedule}
              </ListSubItem>
              <ListSubItem item xs={1.5}>
                {teacher.rating}
              </ListSubItem>
            </Grid>
          </ButtonBase>
        ))}
      </ListStack>
      {open && (
        <TeacherProfileModal
          open={open}
          handleClose={handleClose}
          teacher={selectedTeacher}
        />
      )}
    </>
  );
}

const ListStack = styled(Stack)(() => ({
  margin: "40px 120px 0px 120px",
}));

const ListHeader = styled(Grid)(() => ({
  // justifyContent: "space-between",
  padding: "10px",
  fontSize: "14px",
  borderTop: "1px solid #ddd",
  borderBottom: "1px solid #ddd",
}));

const ListSubItem = styled(Grid)(() => ({
  fontSize: 14,
  textAlign: "center",
  lineHeight: "30px",
  padding: "10px",
  borderBottom: "1px solid #ddd",
}));

export default SearchAllModal;
