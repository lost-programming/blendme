import React from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material";
import RoastingCard from "./roastingCard";
import { CoffeeBeanInfoType } from "../../types/index";

interface RoastingCardPropsType {
  beanData: CoffeeBeanInfoType[];
}

const CardContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
});

const RoastingCardList = ({ beanData }: RoastingCardPropsType) => {
  const router = useRouter();

  const routerEvent = (name: string) => {
    router.push(`/detail/${name}`);
  };

  return (
    <CardContainer>
      {beanData &&
        beanData.map((bean: CoffeeBeanInfoType, index: number) => {
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
  );
};

export default RoastingCardList;
