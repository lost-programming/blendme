import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box'
import { RoastingItemsType, CoffeeBeanInfoType } from '../../types/index';
import { styled } from '@mui/material';

interface RoastingPropsType {
  getBeanData: Function
  data: CoffeeBeanInfoType[] | undefined
  roastingItems: RoastingItemsType[]
}

const RoastingName = styled('div')({
  display: 'flex',
  flexDirection: 'row'
})

const Roasting = ({ getBeanData, data, roastingItems }: RoastingPropsType) => {
  // onClick 이상함
  
  const menuClick = (item: RoastingItemsType) => {
    const beans = data && data.filter((bean: CoffeeBeanInfoType) => bean.roasting.includes(item.category));
    item.category === 'all'
    ? getBeanData(data) 
    : getBeanData(beans)
  };
  
  return (
    <RoastingName>
      {roastingItems.map((item: RoastingItemsType, index: number) => {
        return (
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
              <Button onClick={() => menuClick(item)}>
                {item.name}
              </Button>
            </ButtonGroup>
          </Box>
        )
      })}
    </RoastingName>
  )
}

export default Roasting;