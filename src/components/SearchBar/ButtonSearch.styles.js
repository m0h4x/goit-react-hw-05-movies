import styled from '@emotion/styled';
import icon from '../../images/search.svg';

export const ButtonSearch = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url(${icon});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: hsl(240deg 6% 87%);

  &:hover {
    opacity: 1;
  }
`;
