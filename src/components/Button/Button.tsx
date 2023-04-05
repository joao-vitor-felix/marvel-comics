import { FC, ReactNode } from "react";
import { DefaultButton } from "./Button.styles";

type ButtonProps = {
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ children }) => {
  return <DefaultButton>{children}</DefaultButton>;
};

export default Button;
