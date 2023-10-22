import { styled } from "@mui/material";
import DisabledTextField from "./disabledTextField";
import { useEffect, useState } from "react";
import CustomCard from "./customCard";

interface buyBeanTypes {
  name: string;
  name_en: string;
  origin: string;
  weight: number;
  roasting: string[];
  feature: string[];
  description: string;
  price: number;
  quantity: number;
  blendingList: string[];
};

const PaymentListContainer = styled("div")({
  display: "flex",
  border: 1,
  borderRadius: 5,
  borderStyle: "solid",
  borderColor: "#808080",
  marginBottom: 30,
  padding: 30,
  width: "100%",
  height: 300
});

const PaymentList = () => {
  const [buyBeanData, setBuyBeanData] = useState<buyBeanTypes>({
    name: "",
    name_en: "",
    origin: "",
    weight: 0,
    roasting: [],
    feature: [],
    description: "",
    price: 0,
    quantity: 0,
    blendingList: []
  });

  useEffect(() => {
    const getbuyBean = localStorage.getItem("buyBean");
    if (getbuyBean !== null) {
      setBuyBeanData(JSON.parse(getbuyBean));
    }
  }, []);
  console.log(buyBeanData)
  const { name, price, quantity, blendingList } = buyBeanData;

  const blending: string = blendingList.toString();
  const total_price: string = price.toLocaleString();
  const total_quantity: string = quantity.toLocaleString();

  return (
    <PaymentListContainer>
      {buyBeanData && blendingList.length === 1 
        ? 
          <CustomCard 
            image="roasted_coffee_beans.jpg"
            alt={blending}
          />
        :
          <CustomCard 
            image="coffeebean.png"
            alt={name}
          />
      }
      <DisabledTextField
        label="상품 정보"
        value={blending}
        width="30%"
      />
      <DisabledTextField
        label="수량"
        value={total_quantity}
        width="30%"
      />
      <DisabledTextField
        label="가격"
        value={total_price}
        width="30%"
      />
    </PaymentListContainer>
  )
}

export default PaymentList;