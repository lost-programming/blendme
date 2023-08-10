import React, { useEffect, useState } from "react";
import { CoffeeBeanInfoType } from "../../types";
import RoastingTable from "../../components/table/roastingTable";
import { styled, Paper, Button } from "@mui/material";
import SimpleInfoText from "../../components/text/simpleInfoText";
import { useRouter } from "next/router";
import { getCoffeeBeanInfo } from "../../api";
import FeatureList from "../../components/list/FeatureList";
import { setNumberComma } from "../../utils/dataFormat";
import PriceText from "../../components/text/priceText";

const DetailContainer = styled(Paper)(({ theme }) => ({
  padding: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

// 이름, 이미지 Box
const BeanSimpleContainer = styled('div')({
  width: '45%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

// 원두 이름
const BeanName = styled('p')({
  fontSize: '28px',
  fontWeight: '700',
  marginBottom: '5px',
});

// 원두 원산지
const BeanOrigin = styled('p')({
  color: '#000',
  fontSize: '13px',
  fontWeight: '500',
  marginBottom: '15px',
});

// 원두 이미지
const BeanImage = styled('img')({
  width: '300px',
  height: '300px',
  marginRight: '10px',
});

// 원두 정보 Container
const BeanInfoContainer = styled('div')({
  width: '50%',
});

// 결제 Container
const ButtonContainer = styled('div')({

});

// 블랜딩, 결제 버튼
const BlendButton = styled(Button)(({ theme }) => ({
  padding: '5px 15px',
  marginRight: '10px',
  color: '#fff',
  borderColor: '#808080',
  backgroundColor: '#808080',
  "&:hover": {
    borderColor: '#808080',
    backgroundColor: '#808080',
  }
}));


interface queryData {
  name: string;
}

// 원두 상세 페이지
const DetailPage = () => {
  const router = useRouter();
  const { query }: queryData = router;
  const [beanData, setBeanData] = useState<CoffeeBeanInfoType>({
    description: "",
    feature: [],
    name: "",
    name_en: "",
    origin: "",
    roasting: [],
    weight: 0
  });

  useEffect(() => {
    if (router.isReady) {
      const name: string = query.name;
      getCoffeeBeanInfo(name).then((res: CoffeeBeanInfoType) => { setBeanData(res) });
    }
  }, [router.isReady]);

  return (
    <DetailContainer elevation={3}>
      {beanData ?
        <>
          {/* 원두 이름, 이미지 */}
          <BeanSimpleContainer>
            <BeanName>{ beanData.name } { setNumberComma(beanData.weight) }g</BeanName>
            <BeanOrigin>원산지: { beanData.origin }</BeanOrigin>
            <BeanImage src={'../coffee_bean.png'}/>
          </BeanSimpleContainer>
          {/* 원두 기본 정보 */}
          <BeanInfoContainer>
            <FeatureList feature={ beanData.feature }/>
            <RoastingTable active_level={ beanData.roasting }/>
            <SimpleInfoText infoText={ beanData.description }/>
            <PriceText price={ beanData.weight }/>
            {/* 버튼 Box */}
            <ButtonContainer>
              <BlendButton onClick={() => router.push('/blend')}>블랜딩</BlendButton>
              <BlendButton onClick={() => router.push('/payment')}>바로 구매하기</BlendButton>
            </ButtonContainer>
          </BeanInfoContainer>
        </> :
        <div>데이터가 없습니다.</div>
      }
    </DetailContainer>
  )
};

export default DetailPage;