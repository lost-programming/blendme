import React, { useEffect, useState } from "react";
import { CoffeeBeanInfoType } from "../../types";
import RoastingTable from "../../components/table/roastingTable";
import { styled } from "@mui/material";
import SimpleInfoText from "../../components/text/simpleInfoText";
import { useRouter } from "next/router";
import { getCoffeeBeanInfo } from "../../api";

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
    console.log('aaaa');
  }, [])

  useEffect(() => {
    if (router.isReady) {
      const name: string = query.name;
      getCoffeeBeanInfo(name).then((res: CoffeeBeanInfoType) => { setBeanData(res) });
    }
  }, [router.isReady]);

  return (
    <DetailContainer>
      <BeanImage src={'../coffee_bean.png'}/>
      <BeanInfoContainer>
        <RoastingTable/>
        <SimpleInfoText infoText={ beanData.description }/>
      </BeanInfoContainer>
    </DetailContainer>
  )
};

export default DetailPage;