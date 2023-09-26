import React, {useState} from "react";
import {styled, Grid, Stack, ButtonBase} from "@mui/material";
import ParentProfileModal from "./ParentProfileModal.js";
import Parents from "../data/Parents";

function SearchAllModal() {
  const [open, setOpen] = useState(false);
  const [selectedParent, setSelectedParent] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleItemClick = (parent) => {
    setSelectedParent(parent);
    handleOpen();
  };

  const ParentsFormat = (parent) => {
    return {
      name: parent.name,
      adress: `${parent.apply[0].address.city}특별시 ${parent.apply[0].address.region} ${parent.apply[0].address.subregion}`,
      title: parent.apply[0]?.introduction?.title,
      schedule: parent.apply[0]?.day.join(", "),
      rating: parent.rating,
    };
  };
  const parentsArray = Object.values(Parents);
  const [parentList, setParentList] = useState(parentsArray.map((parent) => ParentsFormat(parent)));

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

        {parentList.map((parent, index) => (
          <Grid container key={index}>
            <ListSubItem item xs={1.5}>
              profile
            </ListSubItem>
            <ListSubItem item xs={2}>
              {parent.name}
            </ListSubItem>
            <ListSubItem item xs={2}>
              {parent.adress}
            </ListSubItem>
            <ListSubItem item xs={3}>
              {parent.title}
            </ListSubItem>
            <ListSubItem item xs={2}>
              {parent.schedule}
            </ListSubItem>
            <ListSubItem item xs={1.5}>
              <span
                role="button"
                onClick={() => handleItemClick(parentsArray[index])}
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
            </ListSubItem>
          </Grid>
        ))}
      </ListStack>
      {open && <ParentProfileModal open={open} handleClose={handleClose} parent={selectedParent} />}
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
