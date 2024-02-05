import { Button, Checkbox, styled } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { totalPrice } from "recoil/atom";
import { setNumberComma } from "utils/dataFormat";

interface PaymentTermProps {
  price: number;
  quantity: number | undefined;
  checked: boolean;
  finish: boolean;
  point: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TermDiv = styled("div")({});

const TotalPrice = styled("div")({
  textAlign: "center",
  marginTop: 10,
  marginBottom: 10,
  fontSize: 18,
});

const Terms = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 10,
  wordBreak: "keep-all",
});

const ButtonContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 30,
});

const PaymentButton = styled(Button)({
  borderRadius: 5,
});

const PaymentTerm = ({
  price,
  quantity,
  checked,
  finish,
  point,
  onChange,
  onClick,
}: PaymentTermProps) => {
  const usePoint = parseInt(point.replace(",", ""));
  const [paymentPrice, setPaymentPrice] = useRecoilState(totalPrice);

  setPaymentPrice(
    quantity
      ? setNumberComma(point ? price * quantity - usePoint : price * quantity)
      : "",
  );

  return (
    <TermDiv>
      <TotalPrice>
        총 결제 금액 {quantity && <strong>{paymentPrice}</strong>}원
      </TotalPrice>
      <Terms>
        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
        <Checkbox checked={checked} onChange={onChange} />
      </Terms>
      <ButtonContainer>
        <PaymentButton
          type="submit"
          variant="contained"
          size="large"
          disabled={!checked || finish}
          onClick={onClick}
        >
          결제 완료
        </PaymentButton>
      </ButtonContainer>
    </TermDiv>
  );
};

export default PaymentTerm;
