import * as React from "react";
import { styled } from "@mui/material";

const FeatureContainer = styled("div")({
  marginBottom: "15px",
});

const SubTitle = styled("h4")({
  fontSize: "22px",
  fontWeight: "600",
  margin: "0 0 5px 0",
});

const List = styled("div")({
  display: "flex",
  flexDirection: "row",
});

const FeatureItem = styled("div")({
  padding: "5px 13px",
  marginRight: "5px",
  width: "fit-content",
  height: "fit-content",
  color: "#fff",
  fontSize: "12px",
  fontWeight: "700",
  backgroundColor: "#000",
  borderRadius: "15px",
});

interface FeaturePropsType {
  feature: string[];
}

const FeatureList = ({ feature }: FeaturePropsType) => {
  return (
    <FeatureContainer>
      <SubTitle>원두 특징</SubTitle>
      <List>
        {feature.map((v: string) => (
          <FeatureItem key={v}>{v}</FeatureItem>
        ))}
      </List>
    </FeatureContainer>
  );
};

export default FeatureList;
