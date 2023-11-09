import React from "react";
import { Icon, Input, InputAdornment,styled } from "@mui/material";

interface RatioInputProps {
  value: number;
  index: number;
  changeEvent: any;
  ButtonEvent: any;
}

const InputBox = styled("div")({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  left: "50%",
  bottom: "0",
  transform: "translate(-50%, 0%)"
});

const IconButton = styled(Icon)({
  fontSize: "30px !important",
});

const Ratio = styled(Input)<any> ({
  width: "50px",
  margin: "0 6px",
  textAlign: "center",
  "&>input": {
    width: "100%",
    textAlign: "center",
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: "0"
    }
  }
});


const RatioInput = ({ value, index, changeEvent, ButtonEvent }: RatioInputProps) => {
  return (
    <InputBox>
      <IconButton onClick={() => ButtonEvent("remove", index)}>remove_circle</IconButton>
      <Ratio
        type="number"
        maxlength="3"
        value={ value }
        onChange={ () => changeEvent(event, index) }
        endAdornment={<InputAdornment position="end">%</InputAdornment>}
      />
      <IconButton onClick={() => ButtonEvent("add", index)}>add_circle</IconButton>
    </InputBox>
  );
};

export default RatioInput;