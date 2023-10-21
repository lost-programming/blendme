import { CardMedia, styled } from "@mui/material";
import DisabledTextField from "./disabledTextField";
import { useEffect, useState } from "react";

// 받아야 하는 props 목록 => 이미지 / 상품 정보(이름, 용량) / 수량 / 가격

const PaymentListContainer = styled("div")({
  border: 5,
  borderRadius: 5
});

const PaymentList = () => {
  const [buyBeanData, setBuyBeanData] = useState("");

  useEffect(() => {
    const getbuyBean = localStorage.getItem("buyBean");
    if (getbuyBean !== null) {
      setBuyBeanData(JSON.parse(getbuyBean));
    }
  }, []);
  console.log(buyBeanData)
  return (
    <PaymentListContainer>
      <CardMedia
        component="img"
        height="100%"
        image="" // props.이미지
        alt="" // props.이름
      />
      <DisabledTextField
        label=""
        value=""
      />
    </PaymentListContainer>
  )
}

export default PaymentList;