import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { roastingItemsType } from '../../types/index';

const Roasting = ({ getBeanData, data, roastingItems }: any) => {
  // onClick 이상함
  
  const menuClick = (item: roastingItemsType) => {
    const beans = data.filter((bean: any) => bean.roasting.includes(item.category));
    item.category === 'all'
    ? getBeanData(data) 
    : getBeanData(beans)
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {roastingItems.map((item: roastingItemsType, index: number) => {
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
    </div>
  )
}

export default Roasting;