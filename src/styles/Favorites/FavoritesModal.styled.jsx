import ReactModal from 'react-modal';
import styled from 'styled-components';
import { breakpoints } from '../Variables.styled';

export const FavoritesModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding: 15px;
  background-color: #fff;
  width: 80%;
  outline: none !important;

  @media only screen and (min-width: ${breakpoints.md}) {
    width: 60%;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 40%;
  }

  @media only screen and (min-width: ${breakpoints.xl}) {
    width: 20%;
  }
`;

export const FavoritesModalTitle = styled.h6`
  text-align: center;
  color: #000;
  font-size: 18px;
  font-weight: 500;
`;
