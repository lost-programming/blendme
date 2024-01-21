import React from "react";
import { Container, styled } from "@mui/material";
import { RoastingDocsType, RoastingItemsType } from "../../types";

interface RoastingDesPropsType {
  selectedMenu: RoastingDocsType[] | undefined;
  selectedRoasting: RoastingItemsType;
}

const DescriptionContainer = styled(Container)({
  width: "80%",
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
    <DescriptionContainer disableGutters>
      {selectedMenu && selectedRoasting.category !== "all" ? (
        <Description>{selectedMenu[0].short_description}</Description>
      ) : (
        <Description>전체 로스팅 목록입니다.</Description>
      )}
    </DescriptionContainer>
  );
};

export default RoastingDescription;
