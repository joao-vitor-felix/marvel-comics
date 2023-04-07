import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

type ButtonProps = {
  showButton: boolean;
};
export const Button = styled(FontAwesomeIcon)<ButtonProps>`
  position: fixed;
  bottom: 10%;
  right: 0.5%;
  height: 50px;
  color: red;
  pointer-events: none;
  opacity: 0;
  cursor: pointer;
  transform: scale(0);
  transition: all 0.3s ease;

  ${({ showButton }) =>
    showButton &&
    css`
      pointer-events: all;
      transform: scale(1);
      opacity: 1;
    `}
`;
