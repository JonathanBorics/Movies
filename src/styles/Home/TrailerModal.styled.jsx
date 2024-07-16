import styled from 'styled-components';
import ReactModal from 'react-modal';
import { breakpoints } from '../Variables.styled';
import { RiCloseLargeLine } from 'react-icons/ri';

export const Modal = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  background-color: #000;
  outline: none !important;
`;

export const ModalHeader = styled.header`
  background-color: #000;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalTitle = styled.h2`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 20px;
  }
`;

export const CloseIcon = styled(RiCloseLargeLine)`
  color: #fff;
  font-size: 16px;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const IFrame = styled.iframe`
  border: none;
  width: 100%;
  max-height: 90vh;
  height: 720px;
`;
