/* eslint-disable react/prop-types */
import { forwardRef, useState } from 'react';
import {
  CardWrapper,
  PlayIcon,
  TrailerImage,
  TrailerImageWrapper,
  TrailerTitle,
} from '../../styles/Home/TrailerCard.styled';
import TrailerModal from './TrailerModal';
import { useNavigate } from 'react-router';

const TrailerCard = forwardRef(function TrailerCard({ movie }, ref) {
  //State
  const [isOpen, setIsOpen] = useState(false);

  //Hooks
  const navigate = useNavigate();

  //Functions
  const goToMovieHandler = () => navigate(`/movies/${movie.id}`);

  return (
    <CardWrapper ref={ref}>
      <TrailerImageWrapper>
        <TrailerModal isOpen={isOpen} setIsOpen={setIsOpen} movie={movie} />
        <PlayIcon onClick={() => setIsOpen(true)} />
        <TrailerImage
          src={`${import.meta.env.VITE_APP_BASE_IMG_URL}/w500/${
            movie?.backdrop_path
          }`}
        />
      </TrailerImageWrapper>
      <TrailerTitle onClick={goToMovieHandler}>{movie?.title}</TrailerTitle>
    </CardWrapper>
  );
});

export default TrailerCard;
