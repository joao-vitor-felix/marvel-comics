import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  width: 350px;
  height: 40px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  background-color: #202020;
  border: 1px solid #ec1d24;
  border-radius: 20px;
  padding: 0 12px;

  &:focus {
    box-shadow: 1px 1px 16px 1px #ec1d24;
  }
`;
