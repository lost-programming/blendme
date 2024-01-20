import * as React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";

const RoastingContainer = styled("div")({});

const RoastingItemList = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});

// Roasting 단계 Container
const Item = styled("div")({
  padding: "5px",
  marginBottom: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontSize: "14px",
  "&:first-of-type": {
    paddingLeft: "0px",
  },
  "&>p": {
    whiteSpace: "nowrap",
  },
});

// 커피콩 이미지
const IconImage = styled("img")({
  width: "38px",
  height: "38px",
  opacity: "0.1",
  marginBottom: "10px",
  "&.active": {
    opacity: "1",
  },
});

// Roasting Level 글씨
const SubTitle = styled("h4")({
  fontSize: "22px",
  fontWeight: "600",
  margin: "0 0 5px 0",
});

// 활성화될 로스팅 레벨
interface RoastingPropsType {
  active_level: string[];
}

// 원두 상세 페이지 로스팅 레벨 표시
const RoastingTable = ({ active_level }: RoastingPropsType) => {
  const roasting_level = [
    "Light",
    "Cinnamon",
    "Medium",
    "High",
    "City",
    "Full City",
    "French",
    "Italian",
  ];

  return (
    <RoastingContainer>
      <SubTitle>추천 로스트 레벨</SubTitle>
      <RoastingItemList>
        {roasting_level.map((level: string) => {
          return (
            <Item key={level}>
              <IconImage
                src={"../coffee_bean.png"}
                className={active_level.includes(level) ? "active" : ""}
              />
              <p>{level}</p>
            </Item>
          );
        })}
      </RoastingItemList>
    </RoastingContainer>
  );
};

export default RoastingTable;
