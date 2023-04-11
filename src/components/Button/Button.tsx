import { FC, MouseEventHandler, ReactNode } from "react";
import { DefaultButton } from "./Button.styles";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <DefaultButton onClick={onClick} disabled={disabled}>
      {children}
    </DefaultButton>
  );
};

export default Button;
