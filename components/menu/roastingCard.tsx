import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useRouter } from 'next/router';
import { CoffeeBeanInfoType } from "../../types";

interface RoastingCardProps {
  bean: CoffeeBeanInfoType;
  clickEvent?: any;
}

const RoastingCard = ({ bean, clickEvent }: RoastingCardProps) => {
  const router = useRouter();

  return (
    // <Card sx={{ maxWidth: 345, width: 260 }} onClick={() => router.push(`/detail/${bean.name_en}`)}>
    <Card 
      sx={{ 
        maxWidth: 345, 
        width: 285, 
        padding: '5px', 
      }} 
      onClick={clickEvent}
    >
      <CardActionArea>
        {/* <CardMedia  // 이미지
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography 
            gutterBottom variant="h5" 
            component="div"
          >
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
                {bean.roasting.length-1 !== index ? `${item} / ` : item}
              </Typography>
            )
          })}
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default RoastingCard;