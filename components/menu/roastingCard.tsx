import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CoffeeBeanInfoType } from '../../types';

interface RoastingCardProps {
  bean: CoffeeBeanInfoType;
  clickEvent?: any;
}

const RoastingCard = ({ bean, clickEvent }: RoastingCardProps) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        width: 285, 
        padding: '20px', 
      }} 
      onClick={clickEvent}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="Roasted_coffee_beans.jpg"
          alt="coffee_bean"
        />
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