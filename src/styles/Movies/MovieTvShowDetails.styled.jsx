import styled from 'styled-components';
import { breakpoints } from '../Variables.styled';
import { BsDot } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import bgImage from '../../assets/img/movie background.jpg';

export const DetailsPageWrapper = styled.div`
  padding: 30px 0;
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: ${({ $backgroundimage }) =>
    $backgroundimage ? `url(${$backgroundimage})` : `url(${bgImage})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 1) 25%,
      rgba(254, 254, 254, 0.15) 100%
    );
    z-index: -1;
  }
`;

export const PosterImageWrapper = styled.div`
  flex-basis: 100%;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-basis: 30%;
  }
`;

export const PosterImage = styled.img`
  width: 350px;
  border: none;
  border-radius: 10px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  text-align: left;
  flex-basis: 100%;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-basis: 70%;
  }
`;

export const DetailsContainter = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;

  @media only screen and (min-width: ${breakpoints.md}) {
    width: 80%;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 70%;
    flex-direction: row;
    align-items: flex-start;
  }

  @media only screen and (min-width: ${breakpoints.xl}) {
    width: 70%;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 20px;
  font-weight: 700;

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 25px;
  }

  @media only screen and (min-width: ${breakpoints.xl}) {
    font-size: 35px;
  }
`;

export const TitleYear = styled(Title)`
  color: lightgrey;
  font-weight: 400;
`;

export const Subtitle = styled.h6`
  color: #fff;
  font-size: 16px;

  @media only screen and (min-width: ${breakpoints.xl}) {
    font-size: 18px;
  }
`;

export const Dot = styled(BsDot)`
  color: #fff;
  font-size: 25px;
`;

export const FavoritesButton = styled.button`
  height: 55px;
  width: 55px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #032541;

  &:hover {
    cursor: pointer;
  }
`;

export const FavoriteIcon = styled(FaHeart)`
  color: ${({ bgcolor }) => bgcolor};
  font-size: 18px;
  transition: color 0.5s ease;
`;

export const PlayTrailerButton = styled.button`
  color: #fff;
  font-size: 20px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Tagline = styled.p`
  font-size: 18px;
  color: grey;
  font-style: italic;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 20px;
  }
`;

export const OverviewTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0;

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 20px;
  }
`;

export const OverviewText = styled.p`
  color: #ffff;
  line-height: double;
`;
