import { styled, TextField } from "@mui/material";
import React from "react";

interface InputTextFieldPropsType {
  title: string;
  label: string;
  value: string;
  name?: string;
  onChange?: React.ChangeEventHandler;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CustomInputTextField = styled(TextField)({
  display: "flex",
  marginBottom: 20,
  borderRadius: 5,
  background: "#FFFFFF",
});

const InputTextField = ({
  title,
  name,
  label,
  value,
  onChange,
  onClick,
}: InputTextFieldPropsType) => {
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
      onClick={onClick}
    />
  );
};

export default InputTextField;
