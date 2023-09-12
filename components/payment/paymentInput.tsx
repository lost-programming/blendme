import { TextField, styled } from "@mui/material"
import { RequiredInputType } from "../../types";

interface PaymentInputPropsType {
  inputName: React.ReactNode
}

const CustomPaymentInput = styled(TextField)({
  display: "flex",
  flexDirection: "column",
  background: "white",
  marginBottom: "20px",
  borderRadius: "5px"
})

const PaymentInput = ({ inputName }: PaymentInputPropsType) => {
  return (
    <CustomPaymentInput 
      required
      id="outlined-required"
      label={inputName}
      defaultValue=""
    />
  )
}

export default PaymentInput;