import { useEffect, useState } from "react";
import PaymentList from "../../components/payment/paymentList";
import PaymentInput from "../../components/payment/paymentInput";
import { styled, Box } from "@mui/material";
import { CoffeeBeanInfoType } from "../../types";

const PaymentContainer = styled(Box)({
  marginTop: 30,
})

const Payment = () => {
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
    image: ""
  });

  useEffect(() => {
    const getbuyBean = localStorage.getItem("buyBean");
    if (getbuyBean !== null) {
      setBuyBeanData(JSON.parse(getbuyBean));
    }
  }, []);
  
  return (
    <PaymentContainer>
      <PaymentList
        image={buyBeanData.image}
        info={buyBeanData.blendingList?.join(" / ")}
        weight={buyBeanData.weight}
        quantity={buyBeanData.quantity}
        price={buyBeanData.price}
      />
      <PaymentInput price={buyBeanData.price} quantity={buyBeanData.quantity}/>
    </PaymentContainer>
  )
}

export default Payment;