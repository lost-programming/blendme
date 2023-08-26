import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box'
import { RoastingItemsType, CoffeeBeanInfoType, RoastingDocsType } from '../../types/index';
import { styled } from '@mui/material';
import RoastingDescription from './roastingDescription';
import { useState } from 'react';

interface RoastingPropsType {
  getBeanData: Function
  data: CoffeeBeanInfoType[]
  roastingItems: RoastingItemsType[]
  roastingData: RoastingDocsType[]
}

const RoastingName = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  height: 200,
  flexWrap: 'wrap'
});

interface RoastingButtonType {
  bgColor: string;
}

const RoastingButton = styled(Button)<RoastingButtonType>(({ bgColor }) => ({
  fontSize: 15,
  height: 45,

  '&:hover': {
    backgroundColor: bgColor
  },
  '&:active': {
    backgroundColor: bgColor
  },
  '&:focus': {
    backgroundColor: bgColor
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