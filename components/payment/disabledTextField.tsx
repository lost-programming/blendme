import { TextField, styled } from "@mui/material";

export const CustomTextField = styled(TextField)({
  diplay: "flex",
  flexDirection: "row",
  background: "white",
  marginBottom: "20px",
  borderRadius: "5px",
  width: "30%",
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