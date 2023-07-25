import React from "react";
import { CoffeeBeanInfoType } from "../../types";
import RoastingTable from "../../components/table/roastingTable";
import { styled } from "@mui/material";
import SimpleInfoText from "../../components/text/simpleInfoText";

const DetailContainer = styled('div')({
  width: '1140px',
  padding: '20px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid #000',
  borderRadius: '5px',
});

const BeanImage = styled('img')({
  width: '300px',
  height: '300px',
  marginRight: '10px',
});

const BeanInfoContainer = styled('div')({
  width: '50%',
});

// 원두 상세 페이지
const DetailPage = () => {
  const testData: CoffeeBeanInfoType = {
    name: '과테말라 안티구아',
    origin: '과테말라',
    weight: 1000,
    roasting: ['Full City'],
    feature: ['신맛', '초콜릿 향', '스모키 향'],
    description: '안티구아는 과테말라에서 가장 오래되고 유명한 커피 생산지역으로, 스모키한 맛과 격조 높은 풍미가 일품으로, 신맛이 강하고 감칠맛이 납니다. 화산지역에서 주로 커피를 경작하여 고급 스모키커피로 유명하며, 산미와 바디가 좋고 오렌지의 신맛, 초콜릿의 향미와 스모키한 향이 특징이다.',
  };

  return (
    <DetailContainer>
      <BeanImage src={'../coffee_bean.png'}/>
      <BeanInfoContainer>
        <RoastingTable/>
        <SimpleInfoText infoText={ testData.description }/>
      </BeanInfoContainer>
    </DetailContainer>
  )
};

export default DetailPage;