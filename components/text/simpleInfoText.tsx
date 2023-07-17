import * as React from "react";
import { styled } from "@mui/material";

const SimpleTextContainer = styled('div')({

});

const SubTitle = styled('h4')({
  fontSize: '22px',
  fontWeight: '600',
  margin: '0 0 5px 0',
});

const Text = styled('p')({

});

const SimpleInfoText = (infoText: string) => {
  return (
    <SimpleTextContainer>
      <SubTitle>Coffee Bean Info</SubTitle>
      <Text>{ infoText }</Text>
    </SimpleTextContainer>
  )
};

export default SimpleInfoText;