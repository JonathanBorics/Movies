import { forwardRef, useMemo, useState } from 'react';
import {
  CardImage,
  CardSubtitle,
  CardTitle,
  CardWrapper,
  CircularButton,
  ImageWrapper,
} from '../../styles/Home/MovieCard.styled';
import { BsThreeDots } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import FavoritesModal from '../Favorites/FavoritesModal';

/* eslint-disable react/prop-types */
const MovieCard = forwardRef(function MovieCard({ movie }, ref) {
  //State
  const [modalOpen, setModalOpen] = useState(false);

  //Date
  const releaseDate = useMemo(
    () =>
      new Date(movie.release_date).toLocaleString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
      }),
    [movie]
  );

  //Hooks
  const navigate = useNavigate();

  //Functions
  const goToMovie = () => navigate(`/movies/${movie.id}`);

  const openModal = () => setModalOpen(true);

  return (
    <CardWrapper ref={ref}>
      <ImageWrapper>
        <CircularButton type="button" onClick={openModal}>
          <BsThreeDots />
        </CircularButton>
        <CardImage
          src={`${import.meta.env.VITE_APP_BASE_IMG_URL}/w500/${
            movie.poster_path
          }`}
        />
      </ImageWrapper>
      <CardTitle onClick={goToMovie}>{movie.title}</CardTitle>
      <CardSubtitle>{releaseDate}</CardSubtitle>
      <FavoritesModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        item={movie}
      />
    </CardWrapper>
  );
});

export default MovieCard;
