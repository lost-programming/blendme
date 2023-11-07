import Image from "next/image";
import { setNumberComma } from "../../utils/dataFormat";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from "@mui/material";

interface PaymentListPropsType {
  image: string | undefined;
  info: string | undefined;
  weight: number;
  quantity: number | undefined;
  price: number;
}

const PaymentListContainer = styled('div')({
  display: 'flex',
  width: '100%',
  height: 300,
  marginBottom: 30
});

const BodyTableCell = styled(TableCell)({
  display: 'inline-block'
})

const PaymentList = ({ image, info, weight, quantity, price }: PaymentListPropsType) => {
  const total_price = quantity && setNumberComma(price * quantity);
  const comma_quantity = quantity && setNumberComma(quantity)

  const rowHeads: string[] = ['상품 이미지', '상품 정보', '무게(g)', '개당 가격(EA)', '수량', '총 가격']
  const rowBodys: (string | number | undefined)[] = [
    image, info, setNumberComma(weight), setNumberComma(price), comma_quantity, total_price]

  return (
    <PaymentListContainer>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              {rowHeads.map((head: string, index: number) => {
                return (
                  <TableCell key={index} align='center'>{head}</TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowBodys.map((body: string | number | undefined, index: number) => {
              return (
                <TableCell
                  key={index}
                  align='center'
                  sx={{ border: 0 }}
                >
                  {info && body === image
                    ? 
                      <Image
                        src={`/${image}`} 
                        alt={info} 
                        width={200} 
                        height={150}
                      />
                    : 
                      <BodyTableCell 
                        component='th' 
                        scope='row' 
                        align='center' 
                        sx={{ border: 0 }}
                      >
                        {body}
                      </BodyTableCell>
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