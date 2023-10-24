import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import CustomTable from "./customTable";

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
  const { price, quantity, weight, blendingList } = buyBeanData;

  const blending: string = blendingList.toString();
  const total_price: string = price.toLocaleString();
  const quantity_weight: string = quantity.toLocaleString() + ", " + weight.toLocaleString();

  return (
    <PaymentListContainer>
      <CustomTable 
        image={buyBeanData && blendingList.length === 1 ? "roasted_coffee_beans.jpg" : "coffeebean.png"}
        name={blending}
        quantity_weight={quantity_weight}
        price={total_price}
      />
    </PaymentListContainer>
  )
}

export default PaymentList;