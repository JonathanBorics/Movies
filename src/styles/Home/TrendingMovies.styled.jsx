import styled from 'styled-components';
import { breakpoints } from '../Variables.styled';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding-top: 60px;
  min-height: 280px;
`;

export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-style: normal;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 15px;
  display: block;
  font-size: 20px;

  @media only screen and (min-width: ${breakpoints.md}) {
    display: inline;
    font-size: 25px;
    margin-bottom: 0;
  }
`;

export const ButtonsWrapper = styled.div`
  display: inline;
  margin-left: 10px;
  border: 1px solid #032541;
  padding: 5px 0;
  border-radius: 25px;
  position: relative;
  z-index: 0;
  user-select: none;
  font-family: 'Roboto', sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: ${(props) => (props.$time === 'day' ? '0' : '100%')};
    transform: ${(props) =>
      props.$time === 'day' ? 'translateX(0)' : 'translateX(-100%)'};
    width: ${(props) =>
      props?.$before === undefined ? '82.5625px' : `${props.$before}px`};
    height: 100%;
    border-radius: 25px;
    background-color: #032541;
    z-index: -1;

    transition: all 0.3s ease;
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    padding: 8px 0;
    margin-left: 30px;
  }
`;

export const TrendingButton = styled.div`
  display: inline;
  padding: 5px 15px;
  border-radius: 25px;
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgcolor};
  font-weight: 500;
  width: 50%;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    padding: 8px 20px;
  }
`;

export const MoviesSlider = styled.div`
  display: flex;
  align-items: flex-start;
  white-space: nowrap;
  overflow-x: scroll;
  gap: 10px;
  max-width: 100%;
  padding: 10px;
  margin-top: 30px;

  &::-webkit-scrollbar {
    width: 100%;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #eeeeee;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 25px;
    background: lightgrey;
  }
`;

export const FadeWrapper = styled.div`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 15px;
    pointer-events: none;
    background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 70%,
      rgba(254, 254, 254, 1) 100%
    );
    width: 400px;
    height: 100%;
    opacity: ${({ $fade }) => ($fade === 'true' ? 1 : 0)};
    transition: opacity 0.4s ease;

    @media only screen and (min-width: ${breakpoints.md}) {
      width: 600px;
    }
  }
`;
