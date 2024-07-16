import styled from 'styled-components';
import { breakpoints } from '../Variables.styled';

export const ActorDetailsPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  padding: 30px 0;
 
`;

export const ActorDetailsContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;


  @media only screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`;

export const ActorImageWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${breakpoints.md}) {
    flex-basis: 30%;
  }
`;

export const ActorImage = styled.img`
  width: 80%;
  border-radius: 10px;
`;

export const ActorDetailsWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  align-items: flex-start;
  text-align: start;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;


  @media only screen and (min-width: ${breakpoints.md}) {
    flex-basis: 70%;
    max-width: 70%;
  }
`;

export const ActorDetailsTitle = styled.h2`
  color: #000;
  font-size: 20px;
  font-weight: 700;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 25px;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 35px;
  }
`;

export const ActorDetailsSubtitle = styled.h5`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 20px;
    margin-top: 20px;
  }
`;
