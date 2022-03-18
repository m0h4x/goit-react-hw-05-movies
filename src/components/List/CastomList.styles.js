import styled from '@emotion/styled';

export const CastomList = styled.ul`
  max-width: calc(100vw - 70px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 10px 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
