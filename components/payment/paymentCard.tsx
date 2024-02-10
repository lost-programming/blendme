import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { setNumberComma } from "utils/dataFormat";

interface PaymentCardProps {
  image: string | undefined;
  name: string;
  weight: number;
  quantity: number | undefined;
  price: number;
}

const PaymentCard = ({
  image,
  name,
  weight,
  quantity,
  price,
}: PaymentCardProps) => {
  return (
    <Card component="div" sx={{ maxWidth: 720, width: "100%" }}>
      <CardMedia
        sx={{ minHeight: 300, backgroundSize: "contain" }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          상품 정보
        </Typography>
        <Typography variant="body2" sx={{ wordBreak: "keep-all" }}>
          {name}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "space-between",
          borderTop: 1,
          borderColor: "#E9ECEF",
        }}
      >
        <Typography>{setNumberComma(weight)}g</Typography>
        <Typography>{quantity && setNumberComma(quantity)}(EA)</Typography>
        <Typography>{setNumberComma(price)}원</Typography>
      </CardActions>
    </Card>
  );
};

export default PaymentCard;
