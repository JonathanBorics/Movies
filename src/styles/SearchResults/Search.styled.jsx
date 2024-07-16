import styled from 'styled-components';
import { breakpoints } from '../Variables.styled';

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonCount = styled.p`
  padding: 3px 15px;
  color: #fff;
  font-weight: 200 !important;
  border-radius: 25px;
  font-size: 14px;

  ${({ $active }) =>
    $active === 'true'
      ? `background-color: #fff;
      color: grey;
        font-weight: bold;`
      : `background-color: #EBEBEB;
      color: #000;
        font-weight: bold;`}
`;

export const Button = styled.button`
  padding: 10px 15px 10px 10px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  color: #000;

  ${({ $active }) =>
    $active === 'true'
      ? `background-color: #ebebeb; 
        font-weight: bold;`
      : ''}

  &:hover {
    background-color: #ebebeb;
    font-weight: bold;
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.6);

    &:hover {
      background-color: #fff;
      font-weight: normal;
      cursor: default;
    }

    ${ButtonCount} {
      background-color: rgb(244, 244, 244);
      color: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Box = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #d2d4d4;
  border-radius: 10px;
  width: 250px;
  margin: 0 auto;
  overflow: hidden;
`;

export const Text = styled.div`
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
  background-color: #01b4e4;
  padding: 10px;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 10px;
`;

export const CardBox = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px;
  display: inline;
`;

export const CardFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  flex-basis: 70%;
`;

export const SearchPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  margin: 0 auto;
  margin-top: 50px;
  gap: 50px;

  @media only screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const CardBoxx = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 1100px;
  overflow: hidden;

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const TextBox = styled.div`
  padding: 10px;
  flex-grow: 1;
  text-align: left;
`;

export const CardTitle = styled.h5`
  font-size: 16px;
  font-weight: 700;
  color: #000;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 20px;
  }
`;

export const CardDate = styled.p`
  font-size: 14px;
  color: #999999;
  font-weight: 500;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #000;
  font-weight: 400;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 16px;
    margin-top: 10px;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    margin-top: 20px;
  }
`;

export const NoResultsText = styled.h2`
  font-size: 25px;
  color: #000;
  font-weight: 600;
  text-align: center;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 35px;
  }
`;
