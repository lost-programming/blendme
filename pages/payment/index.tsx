import { styled } from "@mui/material";
import PaymentList from "../../components/payment/paymenyList";
import PaymentInput from "../../components/payment/paymentInput";

// paymentList props로 받기
// component, page 분리 작업 해야함 (menu, payment)
// 변수명 변경 작업 해야함

const PaymentContainer = styled('div')({
  marginTop: 30
})

const Payment = () => {
  return (
    <PaymentContainer>
      <PaymentList />
      <PaymentInput />
    </PaymentContainer>
  )
}

export default Payment;