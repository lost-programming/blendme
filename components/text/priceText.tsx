import * as React from "react";
import { styled } from "@mui/material";
import { setNumberComma } from "../../utils/dataFormat";

const PriceTextContainer = styled("div")({
  display: "flex",
  textAlign: "right",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "10px",
});

const PriceTitle = styled("p")({
  fontSize: "22px",
  fontWeight: "700",
});

const Price = styled("p")({
  fontSize: "18px",
  fontWeight: "500",
});

interface PriceTextProps {
  price: number;
}

const PriceText = ({ price }: PriceTextProps) => {
  return (
    <PriceTextContainer>
      <PriceTitle>가격</PriceTitle>
      <Price>{setNumberComma(price)}</Price>
    </PriceTextContainer>
  );
};

export default PriceText;
