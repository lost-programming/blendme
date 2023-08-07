import RoastingCard from "./card";
import Roasting from "./roasting";
import { useEffect, useState } from "react";
import { RoastingItemsType, RoastingDocsType } from '../../types/index';
import { useRouter } from "next/router";
import { getCollectionData } from "../../api";
import { CoffeeBeanInfoType } from '../../types/index'
import { styled } from "@mui/material";

const RoastingBeanList = styled('div')({
  
})

const RoastingMenu = () => {
  const roastingItems: RoastingItemsType[] = [
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
  
  const router = useRouter();
  const [staticBeans, setStaticBeans] = useState<CoffeeBeanInfoType[] | undefined>();
  const [beanData, setBeanData] = useState<CoffeeBeanInfoType[] | undefined>();
  const [roastingData, setRoastingData] = useState<RoastingDocsType[] | undefined>();

  useEffect(() => {
    if (router.isReady) {
      getCollectionData('bean').then((res: CoffeeBeanInfoType[]) => {
        setStaticBeans(res);
        setBeanData(res);
      })
      getCollectionData('roasting').then((res: any) => {
        setRoastingData(res);
      })
    }
  }, [router.isReady]);

  const getBeanData = (v: CoffeeBeanInfoType[]) => {
    setBeanData(v)
  };

  return (
    <div>
      <Roasting 
        roastingItems={roastingItems} 
        data={staticBeans}
        getBeanData={getBeanData}
      />
      <RoastingCard beanData={beanData}/>
    </div>
  )
}

export default RoastingMenu;