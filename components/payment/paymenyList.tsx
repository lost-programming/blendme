import { CardMedia, TextField, styled } from "@mui/material";

const CustomTextField = styled(TextField)({
  background: "white",
  marginBottom: "20px",
  borderRadius: "5px",
  width: "50%"
})

const PaymentList = () => {
  return (
    <div>
      <CardMedia 
        component="img"
        height="100%"
        image=""
        alt=""
      />
      <CustomTextField
        disabled
        id="outlined-disabled"
        label=""
        defaultValue=""
      />
    </div>
  )
}

export default PaymentList;