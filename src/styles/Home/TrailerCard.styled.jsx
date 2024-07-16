import styled from 'styled-components';
import { CardImage, CardTitle, ImageWrapper } from './MovieCard.styled';
import { FaPlay } from 'react-icons/fa';

export const CardWrapper = styled.div`
  border: none;
  display: inline-block;
  margin: 0 15px;
  text-align: left;
`;

export const TrailerImageWrapper = styled(ImageWrapper)`
  width: 300px;
`;

export const TrailerImage = styled(CardImage)`
  width: 300px;
  height: 150px;
`;

export const PlayIcon = styled(FaPlay)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  color: rgba(255, 255, 255, 0.8);

  &:hover {
    cursor: pointer;
  }
`;

export const TrailerTitle = styled(CardTitle)`
  color: #fff;
  text-align: center;
`;
