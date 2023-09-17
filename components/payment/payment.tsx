import PaymentList from "./paymenyList"
import PaymentInput from "./paymentInput"

// 결제 방식 추가 해야함 ex) 카카오페이, 네이버페이 등

const Payment = () => {
  return (
    <div>
      <PaymentList />
      <PaymentInput />
    </div>
  )
}

export default Payment;