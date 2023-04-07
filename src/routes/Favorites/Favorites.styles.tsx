import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-row-gap: 40px;
  grid-column-gap: 30px;
  justify-items: center;
  padding: 60px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: white;
  text-align: center;
  margin: 40px 0 0 0;
`;
