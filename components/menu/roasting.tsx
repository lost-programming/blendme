import { useState } from "react";
import RoastingDescription from "./roastingDescription";
import { styled, Box, Button, ButtonGroup } from "@mui/material";
import { RoastingItemsType, CoffeeBeanInfoType, RoastingDocsType } from "../../types/index";

interface RoastingPropsType {
  getBeanData: Function
  data: CoffeeBeanInfoType[]
  roastingItems: RoastingItemsType[]
  roastingData: RoastingDocsType[]
}

const RoastingName = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  height: 200
});

interface RoastingButtonType {
  bgColor: string;
}

const RoastingButton = styled(Button)<RoastingButtonType>(({ bgColor }) => ({
  height: 45,
  fontSize: 18,
  fontWeight: 700,
  color: '#212121',

  '&:hover': {
    backgroundColor: bgColor,
    color: '#FFFAFA'
  },
  '&:active': {
    backgroundColor: bgColor,
    color: '#FFFAFA'
  },
  '&:focus': {
    backgroundColor: bgColor,
    color: '#FFFAFA'
  }
}))

const Roasting = ({ getBeanData, data, roastingItems, roastingData }: RoastingPropsType) => {
  const [selectedMenu, setSelectedMenu] = useState<RoastingDocsType[] | undefined>();
  const [selectedRoasting, setSelectedRoasting] = useState<RoastingItemsType>(roastingItems[0]);

  const menuClick = (item: RoastingItemsType) => {
    const beans = data && data.filter((bean: CoffeeBeanInfoType) => bean.roasting.includes(item.category));
    const menus = roastingData.filter((menu: RoastingDocsType) => menu.name === item.name)
    setSelectedMenu(menus)
    setSelectedRoasting(item)

    item.category === 'all'
    ? getBeanData(data) 
    : getBeanData(beans)
  };
  
  return (
    <RoastingName>
      {roastingItems.map((item: RoastingItemsType, index: number) => {
        return (
          <>
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                  m: 1,
                },
              }}
            >
              <ButtonGroup variant="text" aria-label="text button group">
                <RoastingButton onClick={() => menuClick(item)} bgColor={item.color}>
                  {item.name}
                </RoastingButton>
              </ButtonGroup>
            </Box>
          </>
        )
      })}
      <RoastingDescription selectedMenu={selectedMenu} selectedRoasting={selectedRoasting}/>
    </RoastingName>
  )
};

export default Roasting;