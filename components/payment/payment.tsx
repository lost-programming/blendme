import PaymentList from "./paymenyList"
import PaymentInput from "./paymentInput"
import styled from "styled-components"

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