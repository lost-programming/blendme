import RoastingCard from "./card";
import Roasting from "./roasting";
import { data } from '../../firebase';
import { useState } from "react";
import { roastingItemsType } from '../../types/index';

const RoastingMenu = () => {
  // 로스팅 별 간단한 특징 설명(description) 필요
  const roastingItems: roastingItemsType[] = [
    {
      name: '전체',
      category: 'all',
    },
    {
      name: '미디엄 로스팅',
      category: 'Medium',
    },
    {
      name: '하이 로스팅',
      category: 'High',
    },
    {
      name: '시티 로스팅',
      category: 'City',
    },
    {
      name: '풀 시티 로스팅',
      category: 'Full City',
    },
  ]

  const [beanData, setBeanData] = useState(data);
  const [select, setSelect] = useState(roastingItems[0]);

  const getBeanData = (v: any) => {
    setBeanData(v)
  }

  const getSelect = (v: any) => {
    setSelect(v)
  }

  return (
    <div>
      <Roasting 
        roastingItems={roastingItems} 
        data={data} 
        getBeanData={getBeanData}
        select={select}
        getSelect={getSelect}
      />
      <RoastingCard beanData={beanData}/>
    </div>
  )
}

export default RoastingMenu;