import React, { useEffect, useState } from "react";
import { CoffeeBeanInfoType } from "../../types";
import RoastingTable from "../../components/table/roastingTable";
import { styled, Paper } from "@mui/material";
import SimpleInfoText from "../../components/text/simpleInfoText";
import { useRouter } from "next/router";
import { getCoffeeBeanInfo } from "../../api";
import FeatureList from "../../components/list/FeatureList";
import { setNumberComma } from "../../utils/dataFormat";
import PriceText from "../../components/text/priceText";

const DetailContainer = styled(Paper)(({ theme }) => ({
  width: '1140px',
  padding: '30px',
  margin: '0 auto',
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

const BeanInfoContainer = styled('div')({
  width: '50%',
});

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
          <BeanSimpleContainer>
            <BeanName>{ beanData.name } { setNumberComma(beanData.weight) }g</BeanName>
            <BeanOrigin>원산지: { beanData.origin }</BeanOrigin>
            <BeanImage src={'../coffee_bean.png'}/>
          </BeanSimpleContainer>
          <BeanInfoContainer>
            <FeatureList feature={ beanData.feature }/>
            <RoastingTable active_level={ beanData.roasting }/>
            <SimpleInfoText infoText={ beanData.description }/>
            <PriceText price={ beanData.weight }/>
          </BeanInfoContainer>
        </> :
        <div>데이터가 없습니다.</div>
      }
    </DetailContainer>
  )
};

export default DetailPage;