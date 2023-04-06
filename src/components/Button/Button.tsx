import { FC, MouseEventHandler, ReactNode } from "react";
import { DefaultButton } from "./Button.styles";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <DefaultButton onClick={onClick}>{children}</DefaultButton>;
};

export default Button;
