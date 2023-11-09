import React, { useState } from "react";
import RoastingDescription from "./roastingDescription";
import { styled, Box, Button, ButtonGroup } from "@mui/material";
import {
  RoastingItemsType,
  CoffeeBeanInfoType,
  RoastingDocsType,
} from "../../types/index";

interface MenuButtonType {
  bgColor: string;
}

interface RoastingButtonPropsType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getBeanData: any;
  data: CoffeeBeanInfoType[];
  roastingItems: RoastingItemsType[];
  roastingData: RoastingDocsType[];
}

const RoastingName = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  height: 200,
});

const MenuButton = styled(Button)<MenuButtonType>(({ bgColor }) => ({
  height: 45,
  fontSize: 18,
  fontWeight: 700,
  color: "#212121",

  "&:hover": {
    backgroundColor: bgColor,
    color: "#FFFAFA",
  },
  "&:active": {
    backgroundColor: bgColor,
    color: "#FFFAFA",
  },
  "&:focus": {
    backgroundColor: bgColor,
    color: "#FFFAFA",
  },
}));

const RoastingButton = ({
  getBeanData,
  data,
  roastingItems,
  roastingData,
}: RoastingButtonPropsType) => {
  const [selectedMenu, setSelectedMenu] = useState<
    RoastingDocsType[] | undefined
  >();
  const [selectedRoasting, setSelectedRoasting] = useState<RoastingItemsType>(
    roastingItems[0],
  );

  const menuClick = (item: RoastingItemsType) => {
    const beans =
      data &&
      data.filter((bean: CoffeeBeanInfoType) =>
        bean.roasting.includes(item.category),
      );
    const menus = roastingData.filter(
      (menu: RoastingDocsType) => menu.name === item.name,
    );
    setSelectedMenu(menus);
    setSelectedRoasting(item);

    item.category === "all" ? getBeanData(data) : getBeanData(beans);
  };

  return (
    <RoastingName>
      {roastingItems.map((item: RoastingItemsType, index: number) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "& > *": {
                m: 1,
              },
            }}
          >
            <ButtonGroup variant="text" aria-label="text button group">
              <MenuButton onClick={() => menuClick(item)} bgColor={item.color}>
                {item.name}
              </MenuButton>
            </ButtonGroup>
          </Box>
        );
      })}
      <RoastingDescription
        selectedMenu={selectedMenu}
        selectedRoasting={selectedRoasting}
      />
    </RoastingName>
  );
};

export default RoastingButton;
