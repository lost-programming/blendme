import React from "react";
import { useRouter } from "next/router";
import { styled, Button, Container } from "@mui/material";
import PaymentTable from "../../components/payment/paymentTable";
import { useRecoilValue } from "recoil";
import { buyBeanData, totalPrice } from "recoil/atom";
import PaymentCard from "components/payment/paymentCard";
import { useHandleSize } from "hooks/hooks";

const SucceessContainer = styled(Container)({
  width: "100%",
  paddingTop: 20,
  border: 1,
  borderStyle: "solid",
  borderColor: "#E9ECEF",
  background: "#FFFFFF",
});

const SuccessDiv = styled("div")({
  textAlign: "center",
});

const PaymentSuccess = () => {
  const router = useRouter();

  const buyBean = useRecoilValue(buyBeanData);
  const paymentPrice = useRecoilValue(totalPrice);

  const width = useHandleSize();

  return (
    <SucceessContainer>
      {width > 720 ? (
        <PaymentTable
          image={buyBean.image}
          info={
            buyBean.blendingList
              ? buyBean.blendingList.join(" / ")
              : buyBean.name
          }
          weight={buyBean.weight}
          quantity={buyBean.quantity}
          price={buyBean.price}
        />
      ) : (
        <PaymentCard
          image={buyBean.image}
          name={
            buyBean.blendingList
              ? buyBean.blendingList.join(" , ")
              : buyBean.name
          }
          weight={buyBean.weight}
          quantity={buyBean.quantity}
          price={buyBean.price}
        />
      )}
      <SuccessDiv>
        <h2>총 결제 금액 {paymentPrice}원</h2>
        <h3>결제가 완료됐습니다.</h3>
        <Button onClick={() => router.replace("/")}>메인으로</Button>
      </SuccessDiv>
    </SucceessContainer>
  );
};

export default PaymentSuccess;
