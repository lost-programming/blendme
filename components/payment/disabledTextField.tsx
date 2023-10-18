import { TextField, styled } from "@mui/material";

export const CustomTextField = styled(TextField)({
  background: "white",
  marginBottom: "20px",
  borderRadius: "5px",
  width: "60%",
});

interface DisabledTextFieldTypes {
  label: string;
  value: string;
}

const DisabledTextField = ({ label, value }: DisabledTextFieldTypes) => {
  return (
    <CustomTextField 
      disabled
      id="outlined-disabled"
      label={label}
      value={value}
      size="small"
    />
  )
}

export default DisabledTextField;