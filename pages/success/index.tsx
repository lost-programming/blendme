import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { styled, Button, Container } from "@mui/material";
import PaymentTable from "../../components/payment/paymentTable";
import { useRecoilState } from "recoil";
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

const SuccessSection = styled("section")({
  textAlign: "center",
});

const PaymentSuccess = () => {
  const router = useRouter();

  const [buyBean, setBuyBean] = useRecoilState(buyBeanData);
  const [paymentPrice, setPaymentPrice] = useRecoilState(totalPrice);

  const width = useHandleSize();

  useEffect(() => {
    localStorage.removeItem("buyBean");
    return () => {
      setBuyBean({
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
      setPaymentPrice("");
    };
  }, []);

  return (
    <SucceessContainer>
      {buyBean && (
        <div>
          <section>
            {width > 720 || width < 280 ? (
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
          </section>
          <SuccessSection>
            <h2>총 결제 금액 {paymentPrice}원</h2>
            <h3>결제가 완료됐습니다.</h3>
            <Button onClick={() => router.replace("/")}>메인으로</Button>
          </SuccessSection>{" "}
        </div>
      )}
    </SucceessContainer>
  );
};

export default PaymentSuccess;
