import React, { useEffect, useState } from "react";
import { getCollectionData } from "../api";
import { Box, Container, styled } from "@mui/material";
import {
  CoffeeBeanInfoType,
  RoastingItemsType,
  RoastingDocsType,
} from "../types/index";
import RoastingButton from "components/menu/roastingButton";
import RoastingCard from "components/menu/roastingCard";
import { useRouter } from "next/router";

const RoastingBeanList = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const CardContainer = styled(Container)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: 30,
});

const Home = () => {
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

  const routerEvent = (name: string) => {
    router.push(`/detail/${name}`);
  };

  useEffect(() => {
    const fetchBean = async () => {
      const data = await getCollectionData("bean");
      setStaticBeans(data);
      setBeanData(data);
    };
    fetchBean();

    const fetchRoasting = async () => {
      const data = await getCollectionData("roasting");
      setRoastingData(data);
    };
    fetchRoasting();
  }, []);

  const getBeanData = (v: CoffeeBeanInfoType[]) => {
    setBeanData(v);
  };

  return (
    <RoastingBeanList>
      <Box sx={{ minWidth: 280 }}>
        <RoastingButton
          roastingItems={roastingItems}
          data={staticBeans}
          getBeanData={getBeanData}
          roastingData={roastingData}
        />
      </Box>
      <CardContainer>
        {beanData.map((bean: CoffeeBeanInfoType, index: number) => {
          return (
            <RoastingCard
              bean={bean}
              image={`blendme/${bean.image}`}
              key={index}
              clickEvent={() => routerEvent(bean.name_en)}
            />
          );
        })}
      </CardContainer>
    </RoastingBeanList>
  );
};

export default Home;
