import styled from "styled-components";
import { breakpoints } from "../Variables.styled";

export const ActorDetailsBio = styled.p`
  position: relative;
  color: #000;
  font-size: 14px;
  max-width: 100%;
  margin-bottom: 15px;
  display: inline-block;

  @media only screen and (min-width: ${breakpoints.md}) {
    margin-bottom: 70px;
    font-size: 16px;
  }
`;

export const ReadMoreBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  background-color: transparent;
  border: none;
  color: #032541;
  font-size: 15px;
  font-weight: 700;
  margin-left: 3px;
  gap: 5px;
`;
