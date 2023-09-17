import React, { useState } from "react";
import { useNavigate, BrowserRouter, Route, Switch } from "react-router-dom";
import { styled, Box, Grid, Stack, ButtonBase, Drawer } from "@mui/material";
import TeacherProfileModal from "./TeacherProfileModal.js";
import Teachers from "../data/Teachers";

function SearchAllModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dummyTeacher = Teachers["hyeyeon"];

  const Teacher = {
    name: dummyTeacher.name,
    adress: `${dummyTeacher.apply[0].address.city}특별시 ${dummyTeacher.apply[0].address.region} ${dummyTeacher.apply[0].address.subregion}`,
    title: dummyTeacher.apply[0]?.introduction?.title,
    schedule: dummyTeacher.apply[0]?.day.join(", "),
    rating: dummyTeacher.rating,
  };
  const [teacherList, setTeacherList] = useState([Teacher]);

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

        {/* <ListItem>
          {teacherList.map((teacher, index) => (
            <ListSubItem key={index}>
              {`Name: ${teacher.name}, Address: ${teacher.address}, Title: ${teacher.title}, Schedule: ${teacher.schedule}, Rating: ${teacher.rating}`}
            </ListSubItem>
          ))}
        </ListItem> */}
        <ButtonBase onClick={handleOpen}>
          <ListItem container>
            {teacherList.map((teacher, index) => (
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
            ))}
          </ListItem>
        </ButtonBase>
      </ListStack>
      <TeacherProfileModal open={open} handleClose={handleClose} />
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

const ListItem = styled(Grid)(() => ({}));

const ListSubItem = styled(Grid)(() => ({
  fontSize: 14,
  textAlign: "center",
  lineHeight: "30px",
  padding: "10px",
  borderBottom: "1px solid #ddd",
}));

export default SearchAllModal;
