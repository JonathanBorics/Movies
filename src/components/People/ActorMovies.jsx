import { useNavigate } from 'react-router';
import {
  ActorMovieImage,
  ActorMovieImageWrapper,
  ActorMovieTitle,
  ActorMovieWrapper,
} from '../../styles/People/ActorMovies.styled';
import { forwardRef } from 'react';
import defaultImage from '../../assets/img/no image placeholder.png';

/* eslint-disable react/prop-types */
const ActorMovies = forwardRef(function ActorMovies({ movies }, ref) {
  //Hooks
  const navigate = useNavigate();

  //Functions
  const goToMovieHandler = (id) => {
    navigate(`/movies/${id}`);
  };

  const getRef = (index) => (index === movies.length - 1 ? ref : null);

  const getImage = (movie) =>
    movie?.poster_path
      ? `${import.meta.env.VITE_APP_BASE_IMG_URL}/w500/${movie.poster_path}`
      : defaultImage;

  return (
    <>
      {movies &&
        movies.map((movie, index) => (
          <ActorMovieWrapper
            key={movie.credit_id}
            onClick={() => goToMovieHandler(movie.id)}
            ref={getRef(index)}
          >
            {console.log({ movie })}
            <ActorMovieImageWrapper>
              <ActorMovieImage src={getImage(movie)} />
            </ActorMovieImageWrapper>
            <ActorMovieTitle>{movie?.title ?? movie?.name}</ActorMovieTitle>
          </ActorMovieWrapper>
        ))}
    </>
  );
});

export default ActorMovies;
