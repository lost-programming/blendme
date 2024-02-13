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
  minHeight: 300,
});

const CustomCardMedia = styled(CardMedia)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 200,
});

const CustomCardContent = styled(CardContent)({
  textAlign: "center",
  wordBreak: "keep-all",
  padding: "15 0",
});

const RoastingCard = ({ bean, image, clickEvent }: RoastingCardPropsType) => {
  return (
    <CustomCard onClick={clickEvent}>
      <CardActionArea>
        <CustomCardMedia image={image} sx={{ objectFit: "contain" }} />
        {/* {image && (
            <Image
              priority
              src={image}
              alt={bean.name}
              blurDataURL={image}
              width={220}
              height={140}
              style={{ objectFit: "contain" }}
            />
          )} */}
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
