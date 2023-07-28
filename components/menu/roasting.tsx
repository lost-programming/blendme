import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { roastingItemsType } from '../../types/index';

const Roasting = ({ getBeanData, data, roastingItems, select, getSelect }: any) => {
  // onClick 이상함
  
  const menuClick = (item: roastingItemsType) => {
    getSelect(item)
    select.category === 'all' 
    ? getBeanData(data) 
    : getBeanData(data.filter((bean: any) => bean.roasting.includes(select.category)))
  }
  
  return (
    <div>
      {roastingItems.map((item: roastingItemsType, index: number) => {
        return (
          <div key={index}>
            <Box
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
          </div>
        )
      })}
    </div>
  )
}

export default Roasting;