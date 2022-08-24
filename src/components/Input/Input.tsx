import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, value, onChange }: IProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
