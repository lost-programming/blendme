import { TextField, Button, styled, Checkbox } from "@mui/material"
import React, { useState } from "react";

const CustomPaymentInput = styled(TextField)({
  display: "flex",
  flexDirection: "column",
  background: "white",
  marginBottom: "20px",
  borderRadius: "5px"
})

const Terms = styled('div')({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  marginBottom: "10px"
})

const PaymentButton = styled(Button)({
  display: "flex",
  borderRadius: "5px",
  marginLeft: "auto"
})

const PaymentInput = () => {
  const inputName: string[] = ["이름", "배송지 정보", "전화번호"];
  const [checked, setChecked] = useState(true);

  const [detail, setDetail] = useState({
    name: "",
    address: "",
    phone: ""
  });

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(e.target.value)
    setDetail({ ...detail, [name]: value })
  };

  const checkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
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
            size="small"
            key={index}
            onChange={inputChange}
          />
        )
      })}
      <Terms>
        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
        <Checkbox checked={checked} onChange={checkChange}/>
      </Terms>
      <PaymentButton variant="contained" onSubmit={inputSubmit}>
        결제 완료
      </PaymentButton>
    </div>
  )
}

export default PaymentInput;