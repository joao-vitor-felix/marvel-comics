import styled from "styled-components";

export const DefaultButton = styled.button`
  width: 100px;
  height: 40px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 20px;
  color: white;
  background-color: #ec1d24;
  padding: 5px 8px;
  font-weight: bold;

  &:hover {
    background-color: #d43339;
  }
`;
