import React from "react";
import { Box, Button, TextField, styled } from "@mui/material";
import { setNumberComma } from "utils/dataFormat";

interface PaymentPointProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const PointDiv = styled("div")({
  width: "50%",
});

const HeldPoint = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 20,
});

const HeldPointMoney = styled("div")({
  marginLeft: "auto",
});

const UsePoint = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const UsePointTitle = styled("div")({
  width: 50,
});

const UsePointBox = styled(Box)({
  display: "flex",
  width: "100%",
});

const UsePointDiv = styled("div")({
  display: "flex",
  marginRight: "auto",
  width: "80%",
});

const UsePointTextField = styled(TextField)({
  input: {
    textAlign: "right",
  },
  "& .MuiInputBase-root": {
    height: 50,
  },
});

const PointButton = styled(Button)({
  width: 100,
  height: 50,
});

const PaymentPoint = ({ onChange }: PaymentPointProps) => {
  // recoil availablePoint, usePoint, setUsePoint 추가 해야함
  const availablePoint = 1800;

  return (
    <PointDiv>
      <HeldPoint>
        포인트
        <HeldPointMoney>{setNumberComma(availablePoint)}원</HeldPointMoney>
      </HeldPoint>
      <UsePoint>
        <UsePointTitle>사용</UsePointTitle>
        <UsePointBox>
          <UsePointDiv>
            <UsePointTextField
              id="포인트 사용"
              type="search"
              variant="standard"
              fullWidth={true}
              InputProps={{
                inputProps: {
                  min: 0,
                  max: {},
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                },
              }}
              onChange={onChange}
            />
          </UsePointDiv>
          <PointButton>전액사용</PointButton>
        </UsePointBox>
      </UsePoint>
    </PointDiv>
  );
};

export default PaymentPoint;
