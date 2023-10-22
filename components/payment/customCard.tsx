import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface CustomCardTypes {
  image: string;
  alt: string;
  value: string;
}

const CustomCard = ({ image, alt, value }: CustomCardTypes) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={alt}
        sx={{ maxWidth: 350 }}
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {value}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default CustomCard;