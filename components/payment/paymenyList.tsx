import { Card, CardMedia, styled, CardContent, Typography } from "@mui/material";
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
  border: 5,
  borderRadius: 5,
  width: 1000,
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
            value={blending}
          />
        :
          <CustomCard 
            image="coffeebean.png"
            alt={name}
            value={blending}
          />
      }
      <DisabledTextField
        label="상품 정보"
        value={blending}
      />
      <DisabledTextField
        label="수량"
        value={total_quantity}
      />
      <DisabledTextField
        label="가격"
        value={total_price}
      />
    </PaymentListContainer>
  )
}

export default PaymentList;