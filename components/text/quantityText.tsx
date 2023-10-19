import * as React from "react";
import { Icon, Input, InputAdornment, styled } from "@mui/material";
import { setNumberComma } from "../../utils/dataFormat";

const QuantityTextContainer = styled('div')({
  display: 'flex',
  textAlign: 'right',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px',
});

const QuantityTitle = styled('p')({
  fontSize: '22px',
  fontWeight: '700'
});

const InputBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const IconButton = styled(Icon)(({ theme }) => ({
  fontSize: '30px !important',
}));

const Text = styled('p')({
  margin: '0 10px',
  fontSize: '22px'
});

interface QuantityTextProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityText = ({ quantity, setQuantity }: QuantityTextProps) => {
  const quantityCal = (type: string) => {
    if (type === 'add') {
      setQuantity(quantity + 1);
    } else if (type === 'remove') {
      if (quantity - 1 < 1) return false;
      setQuantity(quantity - 1);
    } else {
      console.log('error');
    }
  };

  return (
    <QuantityTextContainer>
      <QuantityTitle>수량</QuantityTitle>

      <InputBox>
        <IconButton onClick={() => quantityCal('remove')}>remove_circle</IconButton>
        <Text>{ quantity }</Text>
        <IconButton onClick={() => quantityCal('add')}>add_circle</IconButton>
      </InputBox>
    </QuantityTextContainer>
  )
};

export default QuantityText;