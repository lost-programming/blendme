import PaymentList from "./paymenyList"
import PaymentInput from "./paymentInput"
import { RequiredInputType } from "../../types"
import { Button, styled, Checkbox } from "@mui/material"
import { useState } from "react"

const Terms = styled('div')({
  display: "flex",
  justifyContent: "end",
  marginBottom: "10px"
})

const PaymentButton = styled(Button)({
  display: "flex",
  borderRadius: "5px",
  marginLeft: "auto"
})

// 결제 방식 추가 해야함 ex) 카카오페이, 네이버페이 등

const Payment = () => {
  const requiredInput: RequiredInputType[] = [
    {
      name: "이름"
    },
    {
      name: "전화번호"
    },
    {
      name: "배송지 정보"
    }
  ]

  const [checked, setChecked] = useState(true);

  const checkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  } 

  return (
    <div>
      <PaymentList />
      {requiredInput.map((req: RequiredInputType, index: number) => {
        return (
          <PaymentInput key={index} inputName={req.name}/>
        )
      })}
      <Terms>
        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
        <Checkbox checked={checked} onChange={checkChange}/>
      </Terms>
      <PaymentButton>
        결제 완료
      </PaymentButton>
    </div>
  )
}

export default Payment;