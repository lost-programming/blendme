import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, styled } from '@mui/material';
import { CoffeeBeanInfoType } from '../../types/index';

interface RoastingCardPropsType {
  beanData: CoffeeBeanInfoType[]
}

const CardList = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
})

const RoastingCard = ({ beanData }: RoastingCardPropsType) => {
  return (
    <CardList>
      {beanData && beanData.map((bean: any, index: number) => {
        return (
          <Card sx={{ maxWidth: 345, width: 230 }} key={index}>
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
      })}
    </CardList>
  );
}

export default RoastingCard;