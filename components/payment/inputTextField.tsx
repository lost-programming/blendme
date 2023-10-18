import { styled, TextField } from "@mui/material";

interface InputTextFieldTypes {
  title: string;
  label: string;
  value: string;
  name?: string;
  onChange: React.ChangeEventHandler
}

const CustomInputTextField = styled(TextField)({
  display: "flex",
  flexDirection: "column",
  background: "white",
  marginBottom: 20,
  borderRadius: 5,
});

const InputTextField = ({ title, name, label, value, onChange }: InputTextFieldTypes) => {
  return (
    <CustomInputTextField 
      required
      id="outlined-required"
      title={title}
      name={name}
      label={label}
      value={value}
      size="small"
      onChange={onChange}
    />
  )
}

export default InputTextField;