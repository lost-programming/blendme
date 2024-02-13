import React from "react";
import {
  styled,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CoffeeBeanInfoType } from "../../types";

interface RoastingCardPropsType {
  bean: CoffeeBeanInfoType;
  image: string;
  clickEvent?: React.MouseEventHandler<HTMLDivElement>;
}

const CustomCard = styled(Card)({
  flexBasis: "25%",
  padding: 15,
  boxShadow: "none",
  overflow: "unset",
});

const CustomCardMedia = styled(CardMedia)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CustomCardContent = styled(CardContent)({
  textAlign: "center",
  wordBreak: "keep-all",
  padding: "15 0",
});

const RoastingCard = ({ bean, image, clickEvent }: RoastingCardPropsType) => {
  return (
    <CustomCard onClick={clickEvent} sx={{ minWidth: 200 }}>
      {image && (
        <CustomCardMedia
          image={image}
          sx={{ minHeight: 200, backgroundSize: "contain" }}
        />
      )}
      <CustomCardContent>
        <Typography gutterBottom variant="h5" component="div">
          {bean.name}
        </Typography>
        {bean.roasting.map((item: string, index: number) => {
          return (
            <Typography
              variant="body2"
              color="text.secondary"
              key={index}
              display="inline"
            >
              {bean.roasting.length - 1 !== index ? `${item} / ` : item}
            </Typography>
          );
        })}
      </CustomCardContent>
    </CustomCard>
  );
};

export default RoastingCard;
