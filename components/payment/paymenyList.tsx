import { CardMedia } from "@mui/material";
import PaymentField from "./paymentField";

interface PaymentListPropsType {
  props: any;
}

const PaymentList = () => {
  return (
    <div>
      <CardMedia 
        component="img"
        height="100%"
        image=""
        alt=""
      />
      {/* {props.map((v: any, index: number) => {
        return (
          <PaymentField key={index}/>
        )
      })} */}
    </div>
  )
}

export default PaymentList;