import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Menu, MenuItem, Button, Grid } from "@mui/material";

function Footer() {

    const items = [
        "Home",
        "About",
        "Register with us",
        "Privacy Policy",
        "Terms & Conditions",
    ];

  return (
    <>
      <Grid sx={{ backgroundColor: "rgba(93, 90, 136, 0.3)", marginTop: "50px", color: "#8D8BA7",padding: "20px 0px 10px 80px",}}>
        <Box sx={{ fontWeight: "bold" }}>Quick Links</Box>
        <Styledul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Styledul>
      </Grid>
    </>
  );
}

const Styledul = styled("ul")(() => ({
    fontSize: "14px",
    listStyle: "none",
    padding: "5",
    "& li": {
      color: "white",
      paddingRight: "60px",
      display: "inline-Block",
      //marginBottom: "10px",
    },
  }));

export default Footer;
