import { TextField, styled } from "@mui/material"
import { useState } from "react";

interface PaymentInputPropsType {
  inputName: React.ReactNode
}

const CustomPaymentInput = styled(TextField)({
  display: "flex",
  flexDirection: "column",
  background: "white",
  marginBottom: "20px",
  borderRadius: "5px",
})

const PaymentInput = ({ inputName }: PaymentInputPropsType) => {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const inputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.value]: e.target.value })
  }

  return (
    <CustomPaymentInput 
      required
      id="outlined-required"
      label={inputName}
      defaultValue=""
      size="small"
    />
  )
}

export default PaymentInput;