import React, { useEffect, useState } from "react";
import { CoffeeBeanInfoType } from "../../types";
import { getCollectionData } from "../../api";
import { useRouter } from "next/router";
import { styled } from "@mui/material";
import RoastingCardList from "../../components/menu/roastingCardList";
import RoastingCard from "../../components/menu/roastingCard";

const BlendContainer = styled('div')({
  width: '100%',
});

const SelectItemList = styled('div')({
  width: '100%',
  height: '300px',
  marginBottom: '40px',
  backgroundColor: '#808080',
  display: 'flex',
});

const BlendItemList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center'
});

// 원두 섞는거는 최대 5개까지 가능
// 원두 상세에서 넘어올때 쿠키로 넘길지 recoil로 넘길지
const BlendPage = () => {
  const router = useRouter();
  const [blendList, setBlendList] = useState<CoffeeBeanInfoType[]>([]);
  const [beanData, setBeanData] = useState<CoffeeBeanInfoType[]>([]);

  // 카드 선택시 이벤트
  const cardClickEvent = (name: string) => {
    const select = beanData.filter((v) => v.name_en === name);
    setBlendList([...blendList, ...select]);
  };

  useEffect(() => {
    if (router.isReady) {
      getCollectionData('bean').then((res: CoffeeBeanInfoType[]) => { setBeanData(res); });
    }
  }, [router.isReady]);

  return (
    <BlendContainer>
      {/* 블랜딩 원두 리스트 */}
      <SelectItemList>
        {blendList.map((bean, index) => {
          return (
            <RoastingCard bean={ bean } key={ index }/>
          )
          })
        }
      </SelectItemList>
      {/* 블랜딩 원두 리스트 */}
      <BlendItemList>
        {beanData.map((bean: CoffeeBeanInfoType, index: number) => {
          return (
            <RoastingCard bean={ bean } key={ index } clickEvent={() => cardClickEvent(bean.name_en)}/>
          )
        })}
      </BlendItemList>
    </BlendContainer>
  )
};

export default BlendPage;