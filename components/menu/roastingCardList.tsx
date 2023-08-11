import React from 'react';
import {  styled } from '@mui/material';
import { CoffeeBeanInfoType } from '../../types/index';
import RoastingCard from './roastingCard';
import { useRouter } from "next/router";

interface RoastingCardPropsType {
  beanData: CoffeeBeanInfoType[];
}

const CardList = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
});

const RoastingCardList = ({ beanData }: RoastingCardPropsType) => {
  const router = useRouter();

  const routerEvent = (name: string) => {
    router.push(`/detail/${ name }`)
  };

  return (
    <CardList>
      {beanData && beanData.map((bean: any, index: number) => {
        return (
          <RoastingCard bean={bean} key={index} clickEvent={() => routerEvent(bean.name_en)}/>
        )
      })}
    </CardList>
  )
};

export default RoastingCardList;