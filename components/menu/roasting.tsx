import { useState, useEffect } from 'react';
import { data } from '../../firebase';
import { roasting_level } from '../table/roastingTable';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import RoastingCard from './card';
import { roastingItemsType } from '../../types/index';

const Roasting = () => {
    // 로스팅 별 간단한 특징 설명(description) 필요
    const roastingItems: roastingItemsType[] = [
      {
        name: '전체',
        category: 'all',
        active: true
      },
      {
        name: '미디엄 로스팅',
        category: 'Medium',
        active: false
      },
      {
        name: '하이 로스팅',
        category: 'High',
        active: false
      },
      {
        name: '시티 로스팅',
        category: 'City',
        active: false
      },
      {
        name: '풀 시티 로스팅',
        category: 'Full City',
        active: false
      },
    ]

  const [beanData, setBeanData] = useState(data);
  const [select, setSelect] = useState(roastingItems[0]);

  // onClick 클릭 두 번 해야 바뀜
  
  const menuClick = () => {
    select.category === 'all' 
    ? setBeanData(data) 
    : setBeanData(data.filter(bean => bean.roasting.includes(select.category)))
  }
  
  // useEffect(() => {}, [select.active])

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
                <Button onClick={() => {menuClick(), setSelect(item), !select.active}}>
                  {item.name}
                </Button>
              </ButtonGroup>
            </Box>
            {item.active && <RoastingCard beanData={beanData}/>}
          </div>
        )
      })}
    </div>
  )
}

export default Roasting;