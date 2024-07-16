import styled from "styled-components";
import {
  CardImage,
  CardSubtitle,
  CardWrapper,
  CardTitle,
  ImageWrapper,
  CircularButton,
} from "../../styles/Home/MovieCard.styled";

export const Box = styled.div`
  width: 240px;
  margin: 20px;
  background-color: #ffffff;
  border: 1px solid #b8b8b8;
  border-radius: 10px;
  box-shadow: 0.1px 0.1px 11px grey;
  transition-duration: 600ms;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0.1px 0.1px 20px #032541;
    background: rgb(2, 37, 65);
    color: white;
  }

  @media only screen and (min-width: 1400px) {
    width: 100%;
  }

  @media only screen and (min-width: 1120px) {
    width: 90%;
  }
  @media only screen and (min-width: 840px) {
    width: 85%;
  }
  @media only screen and (max-width: 560px) {
    width: 80%;
  }
`;
export const MovieSubtitles = styled(CardSubtitle)`
  margin: 0 0 8px 8px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
  padding: 0 0 5px 5px;
`;

export const Flex = styled.div`
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, 250px);
  margin: 10px auto;
`;
export const MovieTvShowsCircularButton = styled(CircularButton)`
  top: 2.8%;
  left: 86%;
`;

export const MovieWrapper = styled(CardWrapper)`
  margin: 0;

  &:hover {
    ${MovieSubtitles} {
      color: white;
    }
  }
`;

export const MovieImage = styled(CardImage)`
  border-radius: 5px 5px 0 0;
`;

export const MovieImageWrapper = styled(ImageWrapper)`
  width: 100%;
`;

export const MovieText = styled(CardTitle)`
  font-size: 18px;
  margin-bottom: 0;
  padding: 1px 7px 1px 7px;

  @media only screen and (max-width: 1120px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 840px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 560px) {
    font-size: 12px;
  }
`;
