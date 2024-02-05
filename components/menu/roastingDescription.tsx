import React from "react";
import { Box, styled } from "@mui/material";
import { RoastingDocsType, RoastingItemsType } from "../../types";

interface RoastingDesPropsType {
  selectedMenu: RoastingDocsType[] | undefined;
  selectedRoasting: RoastingItemsType;
}

const DescriptionBox = styled(Box)({
  width: "100%",
});

const Description = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: 60,
  color: "#000000",
  background: "#E2E2E2",
});

const RoastingDescription = ({
  selectedMenu,
  selectedRoasting,
}: RoastingDesPropsType) => {
  return (
    <DescriptionBox>
      {selectedMenu && selectedRoasting.category !== "all" ? (
        <Description>{selectedMenu[0].short_description}</Description>
      ) : (
        <Description>전체 로스팅 목록입니다.</Description>
      )}
    </DescriptionBox>
  );
};

export default RoastingDescription;
