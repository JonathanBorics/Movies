import { Box } from '@chakra-ui/react';
import styled from 'styled-components';
import { breakpoints } from '../Variables.styled';

export const PersonCardWrapper = styled(Box)`
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  border: 1px solid lightgrey;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  align-self: normal;

  @media only screen and (min-width: ${breakpoints.md}) {
    &:hover {
      cursor: pointer;
      transform: scale(1.03);
      transition: transform 0.5s ease;
    }
  }
`;

export const PersonImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 50% 40%;

  @media only screen and (min-width: ${breakpoints.md}) {
    height: 250px;
  }

  @media only screen and (min-width: ${breakpoints['2xl']}) {
    height: 400px;
  }
`;

export const PersonName = styled.h3`
  color: #000;
  font-size: 16px;
  padding: 5px 0 0 10px;
  font-weight: 600;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 18px;
  }
`;

export const PersonKnownFor = styled.p`
  color: grey;
  font-size: 14px;
  padding: 0 10px;
  margin-bottom: 25px;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`;
