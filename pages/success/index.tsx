import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { styled, Button, Container, Box } from "@mui/material";
import { CoffeeBeanInfoType } from "../../types";
import PaymentTable from "../../components/payment/paymentTable";
import { useRecoilValue } from "recoil";
import { totalPrice } from "recoil/atom";

const SucceessContainer = styled(Container)({
  width: "100%",
  textAlign: "center",
  border: 1,
  borderStyle: "solid",
  borderColor: "#E9ECEF",
  background: "#FFFFFF",
});

const TableBox = styled(Box)({
  paddingTop: 30,
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

  const paymentPrice = useRecoilValue(totalPrice);

  useEffect(() => {
    const getbuyBean = localStorage.getItem("buyBean");
    if (getbuyBean !== null) {
      setBuyBeanData(JSON.parse(getbuyBean));
    }
  }, []);

  return (
    <SucceessContainer>
      <TableBox>
        <PaymentTable
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
      </TableBox>
      <h2>총 결제 금액 {paymentPrice}원</h2>
      <h3>결제가 완료됐습니다.</h3>
      <Button onClick={() => router.push("/")}>메인으로</Button>
    </SucceessContainer>
  );
};

export default PaymentSuccess;
