import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  styled,
  Box,
  Grid,
  Stack,
  Button,
  Modal,
  FormGroup,
  FormControl,
  TextField,
  Checkbox,
} from "@mui/material";

function SearchConditionalModal({}) {
  return (
    <>
      <ListStack>
        <Grid container sx={{ textAlign: "center", color: "#5D5A88" }}>
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
          <ListHeader item xs={1}>
            Rating
          </ListHeader>
        </Grid>
      </ListStack>
    </>
  );
}

const ListStack = styled(Stack)(() => ({
  margin: "40px 100px 0px 100px",
}));

const ListHeader = styled(Grid)(() => ({
  padding: "10px",
  fontSize: "14px",
  borderTop: "1px solid #ddd",
  borderBottom: "1px solid #ddd",
}));

export default SearchConditionalModal;
