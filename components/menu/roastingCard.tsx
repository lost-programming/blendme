import React from "react";
import {
  styled,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CoffeeBeanInfoType } from "../../types";
import Image from "next/image";

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
  padding: "15 0",
});

const RoastingCard = ({ bean, image, clickEvent }: RoastingCardPropsType) => {
  return (
    <CustomCard onClick={clickEvent}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          loading="lazy"
          height="140"
          src={image}
          alt={bean.image}
          sx={{ objectFit: "contain" }}
        /> */}
        <CustomCardMedia
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            priority
            src={image}
            alt={bean.name}
            width={220}
            height={140}
            objectFit="contain"
          />
        </CustomCardMedia>
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
      </CardActionArea>
    </CustomCard>
  );
};

export default RoastingCard;
