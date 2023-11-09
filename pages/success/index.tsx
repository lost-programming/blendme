import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PaymentList from "../../components/payment/paymentList";
import { styled, Button } from "@mui/material";
import { CoffeeBeanInfoType } from "../../types";

const SucceessContainer = styled("div")({
  textAlign: "center",
});

const PaymentSuccess = () => {
  const router = useRouter();

  const [buyBeanData, setBuyBeanData] = useState<CoffeeBeanInfoType>({
    name: "",
    name_en: "",
    origin: "",
    weight: 0,
    roasting: [],
    feature: [],
    description: "",
    price: 0,
    quantity: 0,
    blendingList: [],
    image: "",
  });

  useEffect(() => {
    const getbuyBean = localStorage.getItem("buyBean");
    if (getbuyBean !== null) {
      setBuyBeanData(JSON.parse(getbuyBean));
    }
  }, []);

  return (
    <SucceessContainer>
      <PaymentList
        image={buyBeanData.image}
        info={
          buyBeanData.blendingList
            ? buyBeanData.blendingList.join(" / ")
            : buyBeanData.name
        }
        weight={buyBeanData.weight}
        quantity={buyBeanData.quantity}
        price={buyBeanData.price}
      />
      <h3>결제가 완료됐습니다.</h3>
      <Button onClick={() => router.push("/")}>메인으로</Button>
    </SucceessContainer>
  );
};

export default PaymentSuccess;
