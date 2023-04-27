import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-row-gap: 40px;
  grid-column-gap: 30px;
  justify-items: center;
  padding: 60px;
`;

export const Error = styled.div`
  text-align: center;
  color: white;
  font-size: 28px;
`;

export const Loading = styled(Error)``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-bottom: 22px;
`;
