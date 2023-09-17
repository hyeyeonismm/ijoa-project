import React, { useState } from "react";
import { useNavigate, render } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "@mui/joy";
import {
  styled,
  Box,
  Grid,
  Stack,
  Drawer,
  List,
  Button,
  ButtonBase,
  Select,
  MenuItem,
} from "@mui/material";
import TeacherProfileModal from "./TeacherProfileModal.js";
import Teachers from "../data/Teachers";
import Cities from "../data/Cities";

function SearchConditionalModal({}) {
  // handleSubmit(event) {
  //   console.log(this.state);
  //   event.preventDefault();

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedSubregions, setSelectedSubregions] = useState([]);
  const [subregion, setSubregion] = useState("");
  const [selectedCareType, setSelectedCareType] = useState([]);
  const careTypes = [
    "긴급돌봄",
    "놀이돌봄",
    "등하원돌봄",
    "교육돌봄",
    "가사돌봄",
  ];
  const cityList = Object.keys(Cities);

  const filteredTeachers = Object.values(Teachers).filter((teacher) => {
    const address = teacher.apply[0].address;
    const activities = teacher.apply[0].activities;

    return (
      (address.city === selectedCity &&
        address.region === selectedRegion &&
        selectedSubregions.includes(address.subregion)) ||
      selectedCareType.some((type) => activities.includes(type))
    );
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ConditionalGrid>
        <Tabs defaultValue={1} sx={{ bgcolor: "transparent" }}>
          <SearchTabList>
            <ItemTab value={1} disableIndicator>
              지역
            </ItemTab>
            <ItemTab value={2} disableIndicator>
              돌봄 내용
            </ItemTab>
            <ItemTab value={3} disableIndicator>
              일정
            </ItemTab>
          </SearchTabList>

          <TabPanel value={1}>
            <SearchBox>
              {/* 지역 */}
              <Details>
                <Titles>
                  <Title>시/도</Title>
                  <Title>구/군</Title>
                  <Title>읍/면/동</Title>
                  <Title sx={{ width: 250 }}>
                    지역은 최대 5개까지 선택 가능합니다.
                  </Title>
                </Titles>
                <Contents>
                  <Region sx={{ padding: 0 }}>
                    {cityList.map((city, index) => (
                      <KeyButton
                        key={index}
                        value={city}
                        onClick={() => setSelectedCity(city)}
                        sx={{
                          height: 30,
                          backgroundColor:
                            selectedCity === city
                              ? "rgba(204, 201, 255, 0.35)"
                              : "transparent",
                        }}
                      >
                        {city}
                      </KeyButton>
                    ))}
                  </Region>

                  <Region>
                    {selectedCity &&
                      Cities[selectedCity].regions.map((region, index) => (
                        <KeyButton
                          key={index}
                          value={region}
                          onClick={() => {
                            setSelectedRegion(region); // 선택된 subregion을 subregion 상태로 설정
                          }}
                          style={{
                            backgroundColor:
                              selectedRegion === region
                                ? "rgba(204, 201, 255, 0.35)"
                                : "transparent",
                          }}
                        >
                          {region}
                        </KeyButton>
                      ))}
                  </Region>

                  <Region>
                    {selectedCity &&
                      selectedRegion &&
                      Cities[selectedCity].subregions[selectedRegion].map(
                        (sr, index) => (
                          <KeyButton
                            key={index}
                            value={sr}
                            onClick={() => {
                              if (selectedSubregions.includes(sr)) {
                                setSelectedSubregions((prev) =>
                                  prev.filter((sub) => sub !== sr)
                                );
                                if (subregion === sr) {
                                  setSubregion(""); // 선택 취소한 subregion이 현재 출력 중인 경우 초기화
                                }
                              } else {
                                if (selectedSubregions.length < 5) {
                                  setSelectedSubregions((prev) => [
                                    ...prev,
                                    sr,
                                  ]);
                                  setSubregion(sr); // 선택된 subregion을 subregion 상태로 설정
                                }
                              }
                            }}
                            style={{
                              backgroundColor: selectedSubregions.includes(sr)
                                ? "rgba(204, 201, 255, 0.35)"
                                : "transparent",
                            }}
                          >
                            {sr}
                          </KeyButton>
                        )
                      )}
                  </Region>
                  <Region
                    sx={{
                      width: 330,
                      margin: 0,
                      padding: "0px 0px 100px 20px",
                      flexWrap: "wrap",
                    }}
                  >
                    {selectedSubregions.map((sr, index) => (
                      <ResultRegion
                        key={index}
                        onDoubleClick={() => {
                          setSelectedSubregions((prev) =>
                            prev.filter((subregion) => subregion !== sr)
                          );
                        }}
                      >
                        {sr}
                      </ResultRegion>
                    ))}
                  </Region>
                </Contents>
              </Details>
            </SearchBox>
          </TabPanel>

          {/* 돌봄 내용 */}
          <TabPanel value={2}>
            <SearchBox
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "30px 60px",
                justifyContent: "space-between",
              }}
            >
              {careTypes.map((type, index) => (
                <KeyButton
                  key={index}
                  value={type}
                  onClick={() => {
                    if (selectedCareType.includes(type)) {
                      // 선택된 돌봄 타입을 배열에서 제거
                      setSelectedCareType((prev) =>
                        prev.filter((item) => item !== type)
                      );
                    } else {
                      // 새로운 돌봄 타입을 배열에 추가
                      setSelectedCareType((prev) => [...prev, type]);
                    }
                  }}
                  style={{
                    width: 95,
                    height: 30,
                    backgroundColor: selectedCareType.includes(type)
                      ? "rgba(204, 201, 255, 0.35)"
                      : "transparent",
                  }}
                >
                  {type}
                </KeyButton>
              ))}
            </SearchBox>
          </TabPanel>
          <TabPanel value={3}>
            <SearchBox></SearchBox>
          </TabPanel>
        </Tabs>
      </ConditionalGrid>
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
          <ListHeader item xs={1.5}>
            Rating
          </ListHeader>
        </Grid>
        <ButtonBase onClick={handleOpen}>
          <ListItem container>
            {filteredTeachers.map((teacher, index) => (
              <Grid container key={index}>
                <ListSubItem item xs={1.5}>
                  profile
                </ListSubItem>
                <ListSubItem item xs={2}>
                  {teacher.name}
                </ListSubItem>
                <ListSubItem item xs={2}>
                  {`${teacher.apply[0].address.city}특별시 ${teacher.apply[0].address.region} ${teacher.apply[0].address.subregion}`}
                </ListSubItem>

                <ListSubItem item xs={3}>
                  {teacher.apply[0]?.introduction?.title}
                </ListSubItem>
                <ListSubItem item xs={2}>
                  {teacher.apply[0]?.day.join(", ")}
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

const ConditionalGrid = styled(Grid)(() => ({
  margin: "-5px 100px",
  padding: "10px 0px 0px 0px",
  borderTop: "1px solid #ddd",
}));

const SearchTabList = styled(TabList)(() => ({
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

const SearchBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px 0px 10px 10px",
  marginTop: "2px",
  borderRadius: 8,
  border: "2px solid #CFD3D4",
}));

const ListStack = styled(Stack)(() => ({
  margin: "20px 120px 0px 120px",
}));

const Region = styled(Grid)(() => ({
  display: "flex",
  flexWrap: "wrap",
  width: 290,
  height: 200,
  overflowY: "scroll",
  padding: "0px 50px",
  gap: 3,
}));

const ResultRegion = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  cursor: "pointer",
  alignItems: "center",
  fontSize: 14,
  width: 85,
  height: 37,
  color: "#6C757D",
  background: "rgba(204, 201, 255, 0.35)",
  borderRadius: 4,
}));

const KeyButton = styled(Button)(() => ({
  display: "block",
  width: 85,
  color: "#6C757D",
}));

const Titles = styled(Grid)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingRight: 60,
  paddingLeft: 50,
}));

const Title = styled(Grid)(() => ({
  fontSize: "14px",
  textAlign: "center",
  width: 200,
  color: "#6c757d",
}));

const Contents = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "row",
  textAlign: "center",
  padding: 20,
}));

const Details = styled(Grid)(() => ({
  width: "100%",
}));

const ListHeader = styled(Grid)(() => ({
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

export default SearchConditionalModal;
