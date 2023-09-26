import React, {useState, useEffect} from "react";
import {Tabs, TabList, Tab, TabPanel} from "@mui/joy";
import {styled, Box, Grid, Stack, Button, ButtonBase} from "@mui/material";
import RegionTeacher from "./RegionTeacher.js";
import RegionParent from "./RegionParent.js";
import CareType from "./CareType.js";
import DetailSchedule from "./DetailSchedule.js";

function SearchConditionalModal({userType}) {
  const Region = userType === "teacher" ? RegionTeacher : RegionParent;

  return (
    <>
      <Grid sx={{margin: "-5px 100px", padding: "10px 0px 0px 0px", borderTop: "1px solid #ddd"}}>
        <Tabs defaultValue={1} sx={{bgcolor: "transparent"}}>
          <SearchTab>
            <ItemTab value={1} disableIndicator>
              지역
            </ItemTab>
            <ItemTab value={2} disableIndicator>
              돌봄 내용
            </ItemTab>
            <ItemTab value={3} disableIndicator>
              일정
            </ItemTab>
          </SearchTab>

          <TabPanel value={1}>
            <Region />
          </TabPanel>
          <TabPanel value={2}>
            <CareType />
          </TabPanel>
          <TabPanel value={3}>
            <DetailSchedule />
          </TabPanel>
        </Tabs>
      </Grid>
    </>
  );
}

const SearchTab = styled(TabList)(() => ({
  display: "flex",
  justifyContent: "space-around",
  marginLeft: 10,
  background: "transparent",
  boxShadow: "none",
  width: 320,
  fontWeight: 700,
  borderBottom: "none",
}));

const ItemTab = styled(Tab)(() => ({
  width: 100,
  height: 28,
  color: "#7976a5",
  border: "2px solid #7976a5",
  borderRadius: 20,
  // margin: "0px 5px",
  gap: 8,
  padding: "10px",
  "&.Mui-selected": {
    boxShadow: "10px",
    background: "#7976a5",
    color: "#fff",
  },
}));

export default SearchConditionalModal;
