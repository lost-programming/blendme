import PaymentList from "./paymenyList"
import PaymentInput from "./paymentInput"
import { styled } from "@mui/material";

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