import { Box, Button, TextField, styled } from "@mui/material";
import React, { SyntheticEvent } from "react";
import { setNumberComma } from "utils/dataFormat";

interface PaymentPointProps {
  availablePoint: number;
  point: string;
  setPoint: React.Dispatch<React.SetStateAction<string>>;
  onChange: React.EventHandler<SyntheticEvent>;
}

const PointDiv = styled("div")({
  width: "100%",
});

const HeldPoint = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 20,
});

const HeldPointTitle = styled("div")({
  marginRight: "auto",
  minWidth: 150,
});

const HeldPointMoney = styled("div")({
  textAlign: "end",
  minWidth: 100,
  paddingRight: 22,
});

const UsePoint = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const UsePointTitle = styled("div")({
  minWidth: 50,
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
  minWidth: 100,
  background: "#FFFFFF",
  input: {
    textAlign: "right",
  },
  "& .MuiInputBase-root": {
    height: 50,
  },
});

const ButtonDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const PointButton = styled(Button)({
  width: 100,
  height: 50,
  background: "#FFFFFF",
});

const PaymentPoint = ({
  availablePoint,
  point,
  setPoint,
  onChange,
}: PaymentPointProps) => {
  return (
    <PointDiv>
      <HeldPoint>
        <HeldPointTitle>보유 포인트</HeldPointTitle>
        <HeldPointMoney>{setNumberComma(availablePoint)}원</HeldPointMoney>
      </HeldPoint>
      <UsePoint>
        <UsePointTitle>사용</UsePointTitle>
        <UsePointBox>
          <UsePointDiv>
            <UsePointTextField
              id="포인트 사용"
              type="text"
              fullWidth={true}
              value={point}
              onChange={onChange}
            />
          </UsePointDiv>
          <ButtonDiv>
            <PointButton onClick={() => setPoint(availablePoint.toString())}>
              전액사용
            </PointButton>
          </ButtonDiv>
        </UsePointBox>
      </UsePoint>
    </PointDiv>
  );
};

export default PaymentPoint;
