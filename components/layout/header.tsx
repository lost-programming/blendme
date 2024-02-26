import { useRouter } from "next/router";
import { styled, Button, Stack } from "@mui/material";
import React from "react";

interface MenuItemListType {
  name: string;
  path: string;
}

const HeaderNav = styled("nav")({
  background: "#495057",
});

const MenuStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const MenuButton = styled(Button)({
  fontSize: 18,
  color: "#E2E2E2",
});

const Header = () => {
  const router = useRouter();

  const menuItemList: MenuItemListType[] = [
    {
      name: "Blendme",
      path: "/",
    },
    {
      name: "Blending",
      path: "blend",
    },
  ];

  return (
    <header>
      <HeaderNav>
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
      </HeaderNav>
    </header>
  );
};

export default Header;
