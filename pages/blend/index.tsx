import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material";
import { getCookie } from "cookies-next/lib";

import { CoffeeBeanInfoType } from "../../types";
import { getCollectionData } from "../../api";
import RoastingCard from "../../components/menu/roastingCard";
import RatioInput from "../../components/blend/ratioInput";

const BlendContainer = styled('div')({
  width: '100%',
});

// 블랜드 원두 리스트
const SelectItemList = styled('div')({
  width: '100%',
  height: 'fit-content',
  marginBottom: '40px',
  display: 'flex',
});

// 선택한 원두
const SelectItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

// 전체 원두 리스트
const BlendItemList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center'
});

// TO-DO : 블랜딩 % 적용 ->
const BlendPage = () => {
  const router = useRouter();
  const [ratioList, setRatioList] = useState([40,8,9,7,6]);
  const [blendList, setBlendList] = useState<CoffeeBeanInfoType[]>([]);
  const [beanData, setBeanData] = useState<CoffeeBeanInfoType[]>([]);

  // 처음 페이지 접속시 기본 블랜드 원두 설정
  useEffect(() => {
    if (router.isReady) {
      const defaultBean = getCookie('defaultBean');
      getCollectionData('bean')
        .then((res: CoffeeBeanInfoType[]) => {
          setBlendList(res.filter((v) => v.name_en === defaultBean));
          setBeanData(res.filter((v) => v.name_en !== defaultBean));
        });
    }
  }, [router.isReady]);

  // 리스트 클릭시 이벤트 (겹치는 부분이 있어서 한개로 합침) // TO-DO : 추가로 나눌수있는지 계속 확인
  const itemClickEvent = (items: CoffeeBeanInfoType[], name: string, type: string) => {
    const selectItem = items.filter((v) => v.name_en === name);
    if (type === 'beanList') {
      if (blendList.length <= 4) {
        // 원두 리스트 클릭시
        setBlendList([...blendList, ...selectItem]);
        setBeanData(beanData.filter((v) => v.name_en !== name));
      } else {
        // 경고창은 추후 수정 예정 -> 기본 js 말고 다른 디자인 적용된거 사용하는게 좋을거같음
        // 일단은 아무 반응이 없으면 이상해서 추가해둠
        alert('더 이상 추가 불가능합니다.');
        return false;
      }
    } else if (type === 'blendList') {
      // 블랜드 리스트 클릭시
      setBlendList(blendList.filter((v) => v.name_en !== name));
      setBeanData([...beanData, ...selectItem]);
    }
  };

  // 블랜딩 비율 값 입력, 변경 (input)
  const RatioOnChange = (event: any, index: number) => {
    const v: number = Number(event.target.value);
    if (v <= 100) {
      const list = [...ratioList];
      list[index] = v;
      setRatioList(list);
    }
  };

  // 블랜딩 비율 -.+ 버튼
  const RatioAddRemove = (type: string, index: number) => {
    const list = [...ratioList];
    if (type === 'add') {
      list[index]++;
    } else if (type === 'remove') {
      list[index]--;
    } else {
      console.log('잘못된 타입 입력');
    }

    // 0 미만 또는 100 초과로 값이 안들어가게 설정
    if (list[index] <= 100 && list[index] >= 0) {
      setRatioList(list)
    }
  };

  return (
    <BlendContainer>
      {/* 블랜딩 원두 리스트 */}
      <SelectItemList>
        {blendList.map((bean, index) => {
          return (
            <SelectItem key={ 'selectItem' + index }>
              <RoastingCard bean={ bean } clickEvent={() => itemClickEvent(blendList, bean.name_en, 'blendList')}/>
              <RatioInput value={ ratioList[index] } index={ index } changeEvent={ RatioOnChange } ButtonEvent={ RatioAddRemove }/>
            </SelectItem>
          )
        })}
      </SelectItemList>
      {/* 블랜딩 원두 리스트 */}
      <BlendItemList>
        {beanData.map((bean: CoffeeBeanInfoType, index: number) => {
          return (
						<RoastingCard bean={ bean } key={ index } clickEvent={() => itemClickEvent(beanData, bean.name_en, 'beanList')}/>
          )
        })}
      </BlendItemList>
    </BlendContainer>
  )
};

export default BlendPage;