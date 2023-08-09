import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, styled } from '@mui/material';
import { useRouter } from 'next/router';

const RoastingCard = ({ bean }: any) => {
  const router = useRouter();
  const [urlName, setUrlName] = useState<any>('');

  useEffect(() => {
    if (router.isReady) {
      const name = router.query.name
      setUrlName(name)
    }
  }, [router.isReady, router.query])

  return (
    <Card sx={{ maxWidth: 345, width: 260 }} onClick={() => router.push(`/detail/${urlName}`)}>
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
}

export default RoastingCard;