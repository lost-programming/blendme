import { TextField } from "@mui/material"

interface PaymentFieldPropsType {
  props: any;
}

const PaymentField = (props: PaymentFieldPropsType) => {
  return (
    <TextField
      disabled
      id="outlined-disabled"
      label=""
      defaultValue=""
    />
  )
}

export default PaymentField;