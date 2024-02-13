import React from "react";
import { styled, Box, Button, ButtonGroup } from "@mui/material";
import {
  RoastingItemsType,
  CoffeeBeanInfoType,
  RoastingDocsType,
} from "../../types/index";
import { useSetRecoilState } from "recoil";
import { selectMenu, selectRoasting } from "recoil/atom";

interface RoastingButtonProps {
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
  height: "100%",
});

const MenuButton = styled(Button)({
  width: "100%",
  height: 45,
  fontSize: 18,
  fontWeight: 700,
  color: "#212121",
});

const RoastingButton = ({
  getBeanData,
  data,
  roastingItems,
  roastingData,
}: RoastingButtonProps) => {
  const setSelectedMenu = useSetRecoilState(selectMenu);
  const setSelectedRoasting = useSetRecoilState(selectRoasting);

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
              <MenuButton
                onClick={() => menuClick(item)}
                sx={{
                  "&:hover": {
                    backgroundColor: item.color,
                    color: "#FFFAFA",
                  },
                  "&:active": {
                    backgroundColor: item.color,
                    color: "#FFFAFA",
                  },
                  "&:focus": {
                    backgroundColor: item.color,
                    color: "#FFFAFA",
                  },
                }}
              >
                {item.name}
              </MenuButton>
            </ButtonGroup>
          </Box>
        );
      })}
    </RoastingName>
  );
};

export default RoastingButton;
