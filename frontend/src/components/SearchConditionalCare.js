import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "@mui/joy";
import { styled, Box, Grid, Stack, Button, ButtonBase } from "@mui/material";
import ParentProfileModal from "./ParentProfileModal.js";
import Parents from "../data/Parents";
import Cities from "../data/Cities";

function SearchConditionalModal() {
  const [selectedCity, setSelectedCity] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(false);
  const [selectedSubregions, setSelectedSubregions] = useState([]);

  const [subregion, setSubregion] = useState(false);
  const [selectedCareType, setSelectedCareType] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedParent, setSelectedParent] = useState(false);
  const careTypes = [
    "긴급돌봄",
    "놀이돌봄",
    "등하원돌봄",
    "교육돌봄",
    "가사돌봄",
  ];
  const cityList = Object.keys(Cities);

  const filteredParents = Object.values(Parents).filter((parent) => {
    const address = parent.apply[0].address;
    const activities = parent.apply[0].activities;

    return (
      (address.city === selectedCity &&
        address.region === selectedRegion &&
        selectedSubregions.includes(address.subregion)) ||
      selectedCareType.some((type) => activities.includes(type))
    );
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleItemClick = (parent) => {
    setSelectedParent(parent);
    handleOpen();
  };
  const parentsArray = Object.values(Parents);

  return (
    <>
      <ConditionalGrid>
        <Tabs
          defaultValue={1}
          sx={{ bgcolor: "transparent" }}
          onChange={(event, newValue) => {
            setSelectedCity(false);
            setSelectedRegion(false);
            setSelectedSubregions([]);
            setSelectedCareType([]);
          }}
        >
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
                        isSelected={selectedCity === city}
                        key={index}
                        value={city}
                        onClick={() => setSelectedCity(city)}
                      >
                        {city}
                      </KeyButton>
                    ))}
                  </Region>

                  <Region>
                    {selectedCity &&
                      Cities[selectedCity].regions.map((region, index) => (
                        <KeyButton
                          isSelected={selectedRegion === region}
                          key={index}
                          value={region}
                          onClick={() => {
                            setSelectedRegion(region); // 선택된 subregion을 subregion 상태로 설정
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
                            isSelected={selectedSubregions.includes(sr)}
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
                padding: "30px 100px",
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

        {filteredParents.map((parent, index) => (
          <Grid container key={index}>
            <ListSubItem item xs={1.5}>
              profile
            </ListSubItem>
            <ListSubItem item xs={2}>
              {parent.name}
            </ListSubItem>
            <ListSubItem item xs={2}>
              {`${parent.apply[0].address.city}특별시 ${parent.apply[0].address.region} ${parent.apply[0].address.subregion}`}
            </ListSubItem>

            <ListSubItem item xs={3}>
              {parent.apply[0]?.introduction?.title}
            </ListSubItem>
            <ListSubItem item xs={2}>
              {parent.apply[0]?.day.join(", ")}
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
      {open && (
        <ParentProfileModal
          open={open}
          handleClose={handleClose}
          parent={selectedParent}
        />
      )}{" "}
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
  width: 340,
  height: 200,
  overflowY: "scroll",
  padding: "0px 38px",
  gap: 3,
}));

const ResultRegion = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  cursor: "pointer",
  alignItems: "center",
  fontSize: 14,
  width: 100,
  height: 37,
  color: "#6C757D",
  background: "rgba(204, 201, 255, 0.35)",
  borderRadius: 4,
}));

const KeyButton = styled(Button)(({ isSelected }) => ({
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

const ListSubItem = styled(Grid)(() => ({
  fontSize: 14,
  textAlign: "center",
  lineHeight: "30px",
  padding: "10px",
  borderBottom: "1px solid #ddd",
}));

export default SearchConditionalModal;
