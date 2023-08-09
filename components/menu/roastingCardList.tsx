import React from 'react';
import {  styled } from '@mui/material';
import { CoffeeBeanInfoType } from '../../types/index';
import RoastingCard from './roastingCard';

interface RoastingCardPropsType {
  beanData: CoffeeBeanInfoType[]
}

const CardList = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
});

const RoastingCardList = ({ beanData }: RoastingCardPropsType) => {
  return (
    <CardList>
      {beanData && beanData.map((bean: any, index: number) => {
        return (
          <RoastingCard bean={bean} key={index}/>
        )
      })}
    </CardList>
  )
};

export default RoastingCardList;