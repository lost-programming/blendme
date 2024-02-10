import React from "react";
import { setNumberComma } from "../../utils/dataFormat";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
} from "@mui/material";

interface PaymentTablePropsType {
  image: string | undefined;
  info: string | undefined;
  weight: number;
  quantity: number | undefined;
  price: number;
}

const PaymentTableContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxHeight: 300,
  marginBottom: 30,
});

const BodyTableCell = styled(TableCell)({
  display: "inline-block",
  maxWidth: 190,
});

const BodyImage = styled("img")({
  width: 200,
  height: 150,
});

const PaymentTable = ({
  image,
  info,
  weight,
  quantity,
  price,
}: PaymentTablePropsType) => {
  const total_price = quantity && setNumberComma(price * quantity);
  const comma_quantity = quantity && setNumberComma(quantity);
  const rowHeads: string[] = [
    "상품 이미지",
    "상품 이름",
    "무게(g)",
    "개당 가격(EA)",
    "수량",
    "총 가격",
  ];
  const rowBodys: (string | number | undefined)[] = [
    image,
    info,
    setNumberComma(weight),
    setNumberComma(price),
    comma_quantity,
    total_price,
  ];

  return (
    <PaymentTableContainer>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              {rowHeads.map((head: string, index: number) => {
                return (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{ wordBreak: "keep-all" }}
                  >
                    {head}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowBodys.map(
              (body: string | number | undefined, index: number) => {
                return (
                  <TableCell key={index} align="center" sx={{ border: 0 }}>
                    {body === image ? (
                      <BodyImage src={image} alt={info} />
                    ) : (
                      <BodyTableCell
                        component="th"
                        scope="row"
                        align="center"
                        sx={{ border: 0, wordBreak: "keep-all" }}
                      >
                        {body}
                      </BodyTableCell>
                    )}
                  </TableCell>
                );
              },
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </PaymentTableContainer>
  );
};

export default PaymentTable;
