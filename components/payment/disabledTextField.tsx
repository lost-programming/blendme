import { TextField, styled } from "@mui/material";

interface CustomTextFieldTypes {
  width: string;
}

export const CustomTextField = styled(TextField)<CustomTextFieldTypes>(({ width }) => ({
  diplay: "flex",
  flexDirection: "row",
  borderRadius: 5,
  width: width
}));

interface DisabledTextFieldTypes {
  label: string;
  value: string;
  width: string;
}

const DisabledTextField = ({ label, value, width}: DisabledTextFieldTypes) => {
  return (
    <CustomTextField
      disabled
      id="outlined-disabled"
      fullWidth
      label={label}
      value={value}
      size="small"
      width={width}
    />
  )
}

export default DisabledTextField;