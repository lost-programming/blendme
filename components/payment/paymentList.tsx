import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from "@mui/material";
import { setNumberComma } from "../../utils/dataFormat";
import Image from "next/image";

interface PaymentListTypes {
  image: string;
  name: string | undefined;
  weight: number;
  quantity: number | undefined;
  price: number;
}

const PaymentListContainer = styled("div")({
  display: "flex",
  border: 1,
  borderRadius: 5,
  borderStyle: "solid",
  borderColor: "#808080",
  marginBottom: 30,
  padding: 30,
  width: "100%",
  height: 300
});

const BodyTableCell = styled(TableCell)({
  display: "inline-block"
})

const PaymentList = ({ image, name, weight, quantity, price }: PaymentListTypes) => {
  const total_price = quantity && setNumberComma(price * quantity);
  const comma_quantity = quantity && setNumberComma(quantity)

  const rowHeads: string[] = ["상품 이미지", "상품 정보", "무게(g)", "개당 가격(EA)", "수량", "총 가격"]
  const rowBodys: (string | number | undefined)[] = [
    image, name, setNumberComma(weight), setNumberComma(price), comma_quantity, total_price]

  return (
    <PaymentListContainer>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {rowHeads.map((head: string, index: number) => {
                return (
                  <TableCell key={index} align="center">{head}</TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowBodys.map((body: string | number | undefined, index: number) => {
              return (
                <TableCell
                  key={index}
                  align="center"
                >
                  {name && body === image
                    ? <Image src={`/${image}`} alt={name} width={200} height={150}/>
                    : <BodyTableCell component="th" scope="row" align="center">{body}</BodyTableCell>
                  }
                </TableCell>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </PaymentListContainer>
  );
}

export default PaymentList;