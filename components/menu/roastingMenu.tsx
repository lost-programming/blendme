import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCollectionData } from "../../api";
import RoastingButton from "./roastingButton";
import RoastingCardList from "./roastingCardList";
import { styled } from "@mui/material";
import {
  CoffeeBeanInfoType,
  RoastingItemsType,
  RoastingDocsType,
} from "../../types/index";

const RoastingBeanList = styled("div")({});

const RoastingMenu = () => {
  const roastingItems: RoastingItemsType[] = [
    {
      name: "전체",
      category: "all",
      color: "#808080",
    },
    {
      name: "미디엄 로스팅",
      category: "Medium",
      color: "#C2986C",
    },
    {
      name: "하이 로스팅",
      category: "High",
      color: "#AE794B",
    },
    {
      name: "시티 로스팅",
      category: "City",
      color: "#976841",
    },
    {
      name: "풀 시티 로스팅",
      category: "Full City",
      color: "#6A452C",
    },
  ];

  const router = useRouter();
  const [staticBeans, setStaticBeans] = useState<CoffeeBeanInfoType[]>([]);
  const [beanData, setBeanData] = useState<CoffeeBeanInfoType[]>([]);
  const [roastingData, setRoastingData] = useState<RoastingDocsType[]>([]);

  useEffect(() => {
    if (router.isReady) {
      getCollectionData("bean").then((res: CoffeeBeanInfoType[]) => {
        setStaticBeans(res);
        setBeanData(res);
      });
      getCollectionData("roasting").then((res: RoastingDocsType[]) => {
        setRoastingData(res);
      });
    }
  }, [router.isReady]);

  const getBeanData = (v: CoffeeBeanInfoType[]) => {
    setBeanData(v);
  };

  return (
    <RoastingBeanList>
      <RoastingButton
        roastingItems={roastingItems}
        data={staticBeans}
        getBeanData={getBeanData}
        roastingData={roastingData}
      />
      <RoastingCardList beanData={beanData} />
    </RoastingBeanList>
  );
};

export default RoastingMenu;
