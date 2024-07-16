import styled from 'styled-components';
import { FOOTER_HEIGHT } from '../Global.styled';
import { breakpoints } from '../Variables.styled';

export const FooterWrapper = styled.footer`
  height: ${FOOTER_HEIGHT};
  background-color: #032541;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const FooterText = styled.h2`
  font-size: 14px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  user-select: none;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 16px;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 18px;
  }
`;
