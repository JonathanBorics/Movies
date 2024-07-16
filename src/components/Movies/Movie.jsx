import { useMemo, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  MovieImage,
  MovieImageWrapper,
  MovieSubtitles,
  MovieText,
  MovieTvShowsCircularButton,
  MovieWrapper,
} from "./Movies.styled";
import { useNavigate } from "react-router-dom";
import FavoritesModal from "../Favorites/FavoritesModal";
/* eslint-disable react/prop-types */
const Movie = ({ movie }) => {
  //State
  const [modalOpen, setModalOpen] = useState(false);

  //Date
  const releaseDate = useMemo(
    () =>
      new Date(movie?.release_date ?? movie?.first_air_date).toLocaleString(
        "en-US",
        {
          month: "long",
          day: "2-digit",
          year: "numeric",
        }
      ),
    [movie]
  );
  //Hooks
  const navigate = useNavigate();
  //Functions
  const goToMovie = () =>
    navigate(`/${movie?.first_air_date ? "tvshows" : "movies"}/${movie.id}`);

  const openModal = () => setModalOpen(true);

  return (
    <MovieWrapper>
      <MovieImageWrapper>
        <MovieTvShowsCircularButton type="button" onClick={openModal}>
          <BsThreeDots />
        </MovieTvShowsCircularButton>
        <MovieImage
          src={`${import.meta.env.VITE_APP_BASE_IMG_URL}/w500/${
            movie?.poster_path
          }`}
        />
      </MovieImageWrapper>
      <MovieText onClick={goToMovie}>{movie?.title ?? movie?.name}</MovieText>
      <MovieSubtitles>{releaseDate}</MovieSubtitles>
      <FavoritesModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        item={movie}
      />
    </MovieWrapper>
  );
};

export default Movie;
