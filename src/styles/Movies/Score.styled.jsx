import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import styled from 'styled-components';
import { breakpoints } from '../Variables.styled';

export const CircularProgress = styled(CircularProgressbarWithChildren)`
  width: 55px;
  height: 55px;

  @media only screen and (min-width: ${breakpoints.md}) {
    width: 60px;
    height: 60px;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 70px;
    height: 70px;
  }
`;

export const Percentage = styled.p`
  position: relative;
  font-size: 22px;
  color: #fff;
  font-weight: 600;
  margin-right: 5px;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 23px;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 25px;
  }

  sup {
    position: absolute;
    top: 15px;
    font-size: 10px;

    @media only screen and (min-width: ${breakpoints.md}) {
      font-size: 11px;
    }
  }
`;

export const ScoreText = styled(Percentage)`
  margin: 0;
  font-size: 16px;
  word-spacing: 9999rem;
  width: min-content;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 18px;
  }
`;
