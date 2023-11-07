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
  clickEvent?: any;
}

const CustomCard = styled(Card)({
  flexBasis: "25%",
  padding: 15,
  boxShadow: "none",
  overflow: "unset",
});

const CustomCardContent = styled(CardContent)({
  padding: "15 0",
});

const RoastingCard = ({ bean, clickEvent }: RoastingCardPropsType) => {
  return (
    <CustomCard onClick={clickEvent}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={bean.image}
          alt={bean.image}
          sx={{ objectFit: "contain" }}
        />
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
