import styled from 'styled-components';
import { breakpoints } from '../Variables.styled';
import { MoviesSlider } from '../Home/TrendingMovies.styled';

export const ActorMovieSlider = styled(MoviesSlider)`
  margin-top: 0;
  max-width: 85vw;

  @media only screen and (min-width: ${breakpoints.md}) {
    max-width: 60vw;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;

export const ActorMovieWrapper = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
`;

export const ActorMovieImageWrapper = styled.div`
  width: 150px;
  border-radius: 10px;
  overflow: hidden;
`;

export const ActorMovieImage = styled.img`
  width: 100%;
  height: 225px;

  &:hover {
    cursor: pointer;
  }
`;

export const ActorMovieTitle = styled.h6`
  color: #000;
  font-size: 14px;
  text-align: center;
  max-width: 100%;
  white-space: wrap;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 16px;
  }

  &:hover {
    cursor: pointer;
  }
`;
