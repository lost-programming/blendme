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
  image: string | undefined;
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
        <CustomCardMedia
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {image && (
            <Image
              loading="lazy"
              src={image}
              alt={bean.name}
              blurDataURL={image}
              width={220}
              height={140}
              style={{ objectFit: "contain" }}
            />
          )}
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
