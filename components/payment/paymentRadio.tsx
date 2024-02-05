import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import React from "react";

interface PaymentRadioProps {
  onClick: React.MouseEventHandler<HTMLLabelElement>;
}

const CustomFormControl = styled(FormControl)({
  width: "100%",
  minWidth: 150,
});

const ControlLabel = styled(FormControlLabel)({
  marginRight: "auto",
  wordBreak: "keep-all",
});

const PaymentRadio = ({ onClick }: PaymentRadioProps) => {
  return (
    <CustomFormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <ControlLabel
          value="normal"
          control={<Radio />}
          label="일반 결제"
          onClick={onClick}
        />
        <ControlLabel
          value="card"
          control={<Radio />}
          label="카드 간편 결제"
          onClick={onClick}
        />
        <ControlLabel
          value="naverpay"
          control={<Radio />}
          label="네이버페이"
          onClick={onClick}
        />
      </RadioGroup>
    </CustomFormControl>
  );
};

export default PaymentRadio;
