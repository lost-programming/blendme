import { Card, CardMedia, styled } from "@mui/material";

interface CustomCardTypes {
  image: string;
  alt: string;
}

const CardConatainer = styled(Card)({
  display: "flex",
  width: 350,
})

const CustomCard = ({ image, alt }: CustomCardTypes) => {
  return (
    <CardConatainer>
      <CardMedia
        component="img"
        image={image}
        alt={alt}
      />
    </CardConatainer>
  )
};

export default CustomCard;