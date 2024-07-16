/* eslint-disable react/prop-types */
import { buildStyles } from 'react-circular-progressbar';
import {
  CircularProgress,
  Percentage,
  ScoreText,
} from '../../styles/Movies/Score.styled';

const Score = ({ percentage }) => {
  return (
    <>
      <CircularProgress
        styles={buildStyles({
          textColor: '#fff',
          pathColor: '#d2d531',
          trailColor: '#423d0f',
          backgroundColor: '#081c22',
          textSize: '30px',
        })}
        background={true}
        value={percentage}
      >
        <Percentage>
          {percentage}
          <sup>%</sup>
        </Percentage>
      </CircularProgress>
      <ScoreText>User Score</ScoreText>
    </>
  );
};

export default Score;
