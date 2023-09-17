import { CardMedia, TextField, styled } from "@mui/material";

const CustomTextField = styled(TextField)({
  background: "white",
  marginBottom: "20px",
  borderRadius: "5px",
  width: "50%",
})

// 받아야 하는 props 목록 => 이미지 / 상품 정보(이름, 용량) / 수량 / 가격

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
        size="small"
      />
    </div>
  )
}

export default PaymentList;