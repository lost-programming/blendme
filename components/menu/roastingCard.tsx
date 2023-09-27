import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, styled } from '@mui/material';
import { CoffeeBeanInfoType } from '../../types';

interface RoastingCardProps {
  bean: CoffeeBeanInfoType;
  clickEvent?: any;
}

const CustomCard = styled(Card)({
  flexBasis: '25%',
  padding: '15px',
  boxShadow: 'none',
  overflow: 'unset'
});

const CustomCardContent = styled(CardContent)({
  padding: '15px 0'
});

const RoastingCard = ({ bean, clickEvent }: RoastingCardProps) => {
  return (
    <CustomCard onClick={clickEvent}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="roasted_coffee_beans.jpg"
          alt="coffee_bean"
        />
        <CustomCardContent>
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
        </CustomCardContent>
      </CardActionArea>
    </CustomCard>
  )
};

export default RoastingCard;