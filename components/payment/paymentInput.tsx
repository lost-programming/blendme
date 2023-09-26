import { TextField, Button, styled, Checkbox } from "@mui/material"
import React, { useState } from "react";
import PaymentAddress from "./paymentAddress";

const CustomPaymentInput = styled(TextField)({
  display: "flex",
  flexDirection: "column",
  background: "white",
  marginBottom: 20,
  borderRadius: 5,
})

const Terms = styled('div')({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  marginBottom: 10
})

const PaymentButton = styled(Button)({
  display: "flex",
  borderRadius: 5,
  marginLeft: "auto"
})

const PaymentInput = () => {
  const inputName: string[] = ["이름", "전화번호"];
  const inputAddress: string[] = ["도로명 주소", "상세 주소 입력"]

  const [checked, setChecked] = useState(true);
  const [addressInfo, setAddressInfo] = useState("");
  const [detail, setDetail] = useState({
    name: "",
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
      <PaymentAddress setAddressInfo={setAddressInfo}/>
      {inputAddress.map((address: string, index: number) => {
        return (
          <CustomPaymentInput 
            required
            id="outlined-required"
            label={address}
            value={addressInfo}
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