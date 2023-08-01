import React, { useEffect, useState } from "react";
import { CoffeeBeanInfoType } from "../../types";
import RoastingTable from "../../components/table/roastingTable";
import { styled } from "@mui/material";
import SimpleInfoText from "../../components/text/simpleInfoText";
import { useRouter } from "next/router";
import { getCoffeeBeanInfo } from "../../api";
import Paper from '@mui/material/Paper';

const DetailContainer = styled(Paper)(({ theme }) => ({
  width: '1140px',
  padding: '30px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const BeanImage = styled('img')({
  width: '300px',
  height: '300px',
  marginRight: '10px',
});

const BeanInfoContainer = styled('Paper')({
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
          <BeanImage src={'../coffee_bean.png'}/>
          <BeanInfoContainer>
            {beanData.feature.map((v: string) => <div>{v}</div>)}
            <RoastingTable active_level={ beanData.roasting }/>
            <SimpleInfoText infoText={ beanData.description }/>
          </BeanInfoContainer>
        </> :
        <div>데이터가 없습니다.</div>
      }
    </DetailContainer>
  )
};

export default DetailPage;