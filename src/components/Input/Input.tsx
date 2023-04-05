import { FC } from "react";
import { Input as DefaultInput } from "./Input.styles";

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  id: string;
};

const Input: FC<InputProps> = ({ type, placeholder, value, id }) => {
  return (
    <DefaultInput type={type} placeholder={placeholder} value={value} id={id} />
  );
};

export default Input;
