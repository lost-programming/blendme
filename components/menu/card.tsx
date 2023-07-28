import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const RoastingCard = ({ beanData }: any) => {
  return (
    <div>
      {beanData && beanData.map((bean: any, index: number) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={index}>
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
                    >
                      {/* bean.roasting.length-1 !== index ? `${item} / ` : item    Typography 줄 바꿈 태그 못 씀 */}
                      {item}
                    </Typography>
                  )
                })}
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </div>
  );
}

export default RoastingCard;