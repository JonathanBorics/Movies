import styled from "styled-components";
//import { breakpoints } from "../Variables.styled";

export const CardWrapper = styled.div`
  border: none;
  display: inline-block;
  margin: 0 15px;
  text-align: left;
`;

export const CircularButton = styled.button`
  position: absolute;
  top: 4%;
  left: 80%;
  border: none;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 150px;
  border-radius: 5px;
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const CardTitle = styled.h6`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0;
  width: 100%;
  white-space: wrap;

  &:hover {
    cursor: pointer;
  }
`;

export const CardSubtitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: gray;
`;
