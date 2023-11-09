import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie, setCookie } from "cookies-next/lib";
import { styled, Paper, Button } from "@mui/material";
// ------------------------------------------------------ //
import { getCoffeeBeanInfo } from "../../api";
import { CoffeeBeanInfoType } from "../../types";
import { addHours, setNumberComma } from "../../utils/dataFormat";
import RoastingTable from "../../components/table/roastingTable";
import SimpleInfoText from "../../components/text/simpleInfoText";
import FeatureList from "../../components/list/FeatureList";
import PriceText from "../../components/text/priceText";
import QuantityText from "../../components/text/quantityText";

const DetailContainer = styled(Paper)(({ theme }) => ({
  padding: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

// 이름, 이미지 Box
const BeanSimpleContainer = styled("div")({
  width: "45%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

// 원두 이름
const BeanName = styled("p")({
  fontSize: "28px",
  fontWeight: "700",
  marginBottom: "5px",
});

// 원두 원산지
const BeanOrigin = styled("p")({
  color: "#000",
  fontSize: "13px",
  fontWeight: "500",
  marginBottom: "15px",
});

// 원두 이미지
const BeanImage = styled("img")({
  width: "300px",
  height: "300px",
  marginRight: "10px",
});

// 원두 정보 Container
const BeanInfoContainer = styled("div")({
  width: "50%",
});

// 결제 Container
const ButtonContainer = styled("div")({

});

// 블랜딩, 결제 버튼
const BlendButton = styled(Button)(({ theme }) => ({
  padding: "5px 15px",
  marginRight: "10px",
  color: "#fff",
  borderColor: "#808080",
  backgroundColor: "#808080",
  "&:hover": {
    borderColor: "#808080",
    backgroundColor: "#808080",
  }
}));

// 원두 상세 페이지
const DetailPage = () => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [beanData, setBeanData] = useState<CoffeeBeanInfoType>({
    description: "",
    feature: [],
    name: "",
    name_en: "",
    origin: "",
    roasting: [],
    weight: 0,
    price: 20000
  });

  // res tpye을 CoffeBeanType으로 설정했을시 오류 나오는거 추후 확인
  useEffect(() => {
    if (router.isReady) {
      const name: any = router.query.name ? router.query.name : "";
      getCoffeeBeanInfo(name).then((res: any) => { setBeanData(res) });
    }
  }, [router.isReady]);

  const GoBlending = () => {
    const expiryDate = addHours(new Date(), 1);
    setCookie("defaultBean", router.query.name, {expires: expiryDate});
    router.push(`/blend`);
  };

  const GoPayment = () => {
    let paymentArr: CoffeeBeanInfoType = beanData;
    paymentArr.quantity = quantity;
    console.log(paymentArr);
    localStorage.setItem("buyBean", JSON.stringify(paymentArr));
    router.push("/payment");
  };

  return (
    <DetailContainer elevation={3}>
      {beanData ?
        <>
          {/* 원두 이름, 이미지 */}
          <BeanSimpleContainer>
            <BeanName>{ beanData.name } { setNumberComma(beanData.weight) }g</BeanName>
            <BeanOrigin>원산지: { beanData.origin }</BeanOrigin>
            <BeanImage src={`../${ beanData.image }`}/>
          </BeanSimpleContainer>
          {/* 원두 기본 정보 */}
          <BeanInfoContainer>
            <FeatureList feature={ beanData.feature }/>
            <RoastingTable active_level={ beanData.roasting }/>
            <SimpleInfoText infoText={ beanData.description }/>
            <PriceText price={ beanData.price }/>
            <QuantityText quantity={ quantity } setQuantity={ setQuantity }/>
            {/* 버튼 Box */}
            <ButtonContainer>
              <BlendButton onClick={() => GoBlending()}>블랜딩</BlendButton>
              <BlendButton onClick={() => GoPayment()}>바로 구매하기</BlendButton>
            </ButtonContainer>
          </BeanInfoContainer>
        </> :
        <div>데이터가 없습니다.</div>
      }
    </DetailContainer>
  )
};

export default DetailPage;