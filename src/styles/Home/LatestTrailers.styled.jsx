import styled from 'styled-components';
import { MoviesSlider, Title, Wrapper } from './TrendingMovies.styled';
import bgImage from '../../assets/img/movie background.jpg';

export const BackgroundWrapper = styled(Wrapper)`
  background-image: url(${bgImage});
  height: 100%;
`;

export const WhiteTitle = styled(Title)`
  color: #fff;
`;

export const TrailersSlider = styled(MoviesSlider)`
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #f0f0f0;
  }
`;
