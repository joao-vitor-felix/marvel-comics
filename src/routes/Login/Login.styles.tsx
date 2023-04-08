import styled from "styled-components";

export const Container = styled.div`
  padding: 60px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
`;

export const Title = styled.h2`
  font-size: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
`;

export const Input = styled.input`
  border: 1px solid #ec1d24;
  width: 300px;
  height: 50px;
  padding: 0 12px;
  border-radius: 14px;
  background-color: #202020;
  outline: none;
  color: white;
  font-size: 14px;

  &:focus {
    box-shadow: 1px 1px 16px 1px #ec1d24;
    background-color: #202020;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
