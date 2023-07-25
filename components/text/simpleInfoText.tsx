import * as React from "react";
import { styled } from "@mui/material";

interface SimpleTextProp {
  infoText: string;
}

const SimpleTextContainer = styled('div')({

});

const SubTitle = styled('h4')({
  fontSize: '22px',
  fontWeight: '600',
  margin: '0 0 5px 0',
});

const Text = styled('p')({

});

const SimpleInfoText = ({ infoText }: SimpleTextProp) => {
  return (
    <SimpleTextContainer>
      <SubTitle>Coffee Bean Info</SubTitle>
      <Text>{ infoText }</Text>
    </SimpleTextContainer>
  )
};

export default SimpleInfoText;