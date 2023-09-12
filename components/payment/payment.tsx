import PaymentList from "./paymenyList"
import PaymentInput from "./paymentInput"
import { RequiredInputType } from "../../types"
import { Button, styled } from "@mui/material"

const PaymentButton = styled(Button)({
  display: "flex",
  borderRadius: "5px"
})

const Payment = () => {
  const requiredInput: RequiredInputType[] = [
    {
      name: "이름"
    },
    {
      name: "배송지 정보"
    },
    {
      name: "전화번호"
    }
  ]

  return (
    <div>
      <PaymentList />
      {requiredInput.map((req) => {
        return (
          <PaymentInput inputName={req.name}/>
        )
      })}
      <PaymentButton>
        결제 완료
      </PaymentButton>
    </div>
  )
}

export default Payment;