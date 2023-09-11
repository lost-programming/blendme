import React from "react";
import { Icon, Input, InputAdornment,styled } from "@mui/material";

interface RatioInputProps {
  value: number;
  index: number;
  changeEvent: any;
  ButtonEvent: any;
}

const InputBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const IconButton = styled(Icon)(({ theme }) => ({
  fontSize: '30px !important',
}));

const Ratio = styled(Input)(({ theme }) => ({
  width: '50px',
  margin: '0 6px',
  textAlign: 'center',
  "&>input": {
    width: '100%',
    textAlign: 'center',
  }
}));


const RatioInput = ({ value, index, changeEvent, ButtonEvent }: RatioInputProps) => {
  return (
    <InputBox>
      <IconButton onClick={() => ButtonEvent('remove', index)}>remove_circle</IconButton>
      <Ratio
        type="text"
        pattern="\d*"
        value={ value }
        onChange={ () => changeEvent(event, index) }
        endAdornment={<InputAdornment position="end">%</InputAdornment>}
      />
      <IconButton onClick={() => ButtonEvent('add', index)}>add_circle</IconButton>
    </InputBox>
  )
};

export default RatioInput;