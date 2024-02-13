import { useRouter } from "next/router";
import { styled, Button, Stack } from "@mui/material";
import React from "react";

interface MenuItemListType {
  name: string;
  path: string;
}

const MenuStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 15,
});

const MenuButton = styled(Button)({
  fontSize: 18,
});

const Header = () => {
  const router = useRouter();

  const menuItemList: MenuItemListType[] = [
    {
      name: "Coffee Bean",
      path: "../",
    },
    {
      name: "Blending",
      path: "blend",
    },
  ];

  return (
    <MenuStack direction="row" spacing={4}>
      {menuItemList.map((menu: MenuItemListType, index: number) => {
        return (
          <MenuButton
            id="basic-button"
            key={"menu" + index}
            onClick={() => {
              router.push(menu.path);
            }}
          >
            {menu.name}
          </MenuButton>
        );
      })}
    </MenuStack>
  );
};

export default Header;
