import { TextField, Button, styled } from "@mui/material"
import { useState } from "react";

const CustomPaymentInput = styled(TextField)({
  display: "flex",
  flexDirection: "column",
  background: "white",
  marginBottom: "20px",
  borderRadius: "5px"
})

const PaymentButton = styled(Button)({
  display: "flex",
  borderRadius: "5px",
  marginLeft: "auto"
})

const PaymentInput = () => {
  const inputName: string[] = ["이름", "배송지 정보", "전화번호"]

  const [detail, setDetail] = useState({
    name: "",
    address: "",
    phone: ""
  })

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(e.target.value)
    setDetail((prev) => {
      return {...prev, [name]: value}
    })
  }

  const inputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // detail 넘겨야 함
    // post 요청 자리인가?
  }

  return (
    <div>
      {inputName.map((name: string, index: number) => {
        return (
          <CustomPaymentInput 
            required
            id="outlined-required"
            label={name}
            defaultValue=""
            key={index}
            onChange={inputChange}
          />
        )
      })}
      <PaymentButton variant="contained" onSubmit={inputSubmit}>
        결제 완료
      </PaymentButton>
    </div>
  )
}

export default PaymentInput;