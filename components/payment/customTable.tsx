import { styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Image from "next/image";

export const StyledTableContainer = styled(TableContainer)({
  diplay: "flex",
  flexDirection: "row",
  borderRadius: 5
});

interface CustomTableTypes {
  image: string;
  name: string;
  quantity_weight: string;
  price: string;
}

const CustomTable = ({ image, name, quantity_weight, price }: CustomTableTypes) => {
  const rowHeads: string[] = ["상품 이미지", "상품 정보", "수량, 무게(g)", "가격"]
  const rowBodys: string[] = [image, name, quantity_weight, price]

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {rowHeads.map((head: string, index: number) => {
              return (
                <TableCell key={index}>{head}</TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowBodys.map((body: string, index: number) => {
            return (
              <TableCell
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {body === image
                  ? <Image src={`/${image}`} alt={name} width={200} height={100}/>
                  : <TableCell component="th" scope="row">{body}</TableCell>
                }
              </TableCell>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;