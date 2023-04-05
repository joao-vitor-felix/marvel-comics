import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 30px;
  justify-content: center;
`;

export const Error = styled.div`
  text-align: center;
  color: white;
  font-size: 24px;
`;

export const Loading = styled(Error)``;
