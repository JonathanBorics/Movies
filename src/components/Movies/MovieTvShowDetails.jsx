/* eslint-disable react/prop-types */
import { useParams } from 'react-router';
import { fetchMovieDetails, fetchTvDetails } from '../../utils/fetch';
import { useEffect, useMemo, useState } from 'react';
import {
  DetailsContainter,
  DetailsPageWrapper,
  DetailsWrapper,
  Dot,
  FavoriteIcon,
  FavoritesButton,
  OverviewText,
  OverviewTitle,
  PlayTrailerButton,
  PosterImage,
  PosterImageWrapper,
  Subtitle,
  Tagline,
  Title,
  TitleYear,
} from '../../styles/Movies/MovieTvShowDetails.styled';
import { Flex, Spinner } from '@chakra-ui/react';
import {
  alreadyInFavorites,
  filterVideos,
  getCredits,
  getGenresString,
  getMovieDuration,
} from '../../utils/functions';
import 'react-circular-progressbar/dist/styles.css';
import { FaPlay } from 'react-icons/fa';
import TrailerModal from '../Home/TrailerModal';
import Credits from './Credits';
import Score from './Score';
import FavoritesModal from '../Favorites/FavoritesModal';
import defaultImage from '../../assets/img/no image placeholder.png';

const MovieTvShowDetails = ({ type }) => {
  //State
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  //Memo
  const {
    year,
    date,
    genresString,
    duration,
    percentage,
    credits,
    isFavorite,
    image,
  } = useMemo(() => {
    const date = new Date(
      type === 'movie' ? details?.release_date : details?.first_air_date
    );
    const year =
      type === 'movie'
        ? date.getFullYear()
        : `${new Date(details?.first_air_date).getFullYear()} - ${new Date(
            details?.last_air_date
          ).getFullYear()}`;
    const duration =
      type === 'movie'
        ? getMovieDuration(details?.runtime)
        : `${details.number_of_seasons} Seasons`;
    const percentage =
      type === 'movie'
        ? details?.vote_average?.toFixed(1) * 10
        : details?.last_episode_to_air?.vote_average.toFixed(1) * 10;

    const image = details?.poster_path
      ? `${import.meta.env.VITE_APP_BASE_IMG_URL}/w500/${details?.poster_path}`
      : defaultImage;

    return {
      year,
      date: date.toLocaleDateString(),
      genresString: getGenresString(details?.genres),
      duration,
      percentage,
      credits: getCredits(details?.credits),
      isFavorite: alreadyInFavorites(details) ? '#DC143C' : '#fff',
      image,
    };
  }, [details, type, modalOpen]);

  //Functions
  const fetchDetails = async () => {
    setIsFetching(true);

    const { data } =
      type === 'movie' ? await fetchMovieDetails(id) : await fetchTvDetails(id);

    setDetails({ ...data, trailer: filterVideos(data.videos.results) });

    setIsFetching(false);
  };

  const openModal = () => setModalOpen(true);

  //Onload
  useEffect(() => {
    fetchDetails();
  }, []);

  return isFetching ? (
    <Flex h="90vh" w="100%" align="center" justify="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  ) : (
    <DetailsPageWrapper
      $backgroundimage={`${import.meta.env.VITE_APP_BASE_IMG_URL}/original/${
        details?.backdrop_path
      }`}
    >
      <DetailsContainter>
        {/* IMAGE */}
        <PosterImageWrapper>
          <PosterImage src={image} />
        </PosterImageWrapper>

        {/* DETAILS */}
        <DetailsWrapper>
          {/* TITLE */}
          <Flex gap={2}>
            <Title>{details.title ?? details.name}</Title>
            <TitleYear>({year})</TitleYear>
          </Flex>
          {/* SUBTITLE */}
          <Flex align="center">
            <Subtitle>
              {date} ({details?.origin_country?.[0]})
            </Subtitle>
            <Dot />
            <Subtitle>{genresString}</Subtitle>
            <Dot />
            <Subtitle>{duration}</Subtitle>
          </Flex>
          <Flex margin={'10px 0'} align="center" gap={5} wrap="wrap">
            {/* SCORE */}
            <Score percentage={percentage} />

            {/* FAVORITES BTN */}
            <FavoritesButton type="button" onClick={openModal}>
              <FavoriteIcon bgcolor={isFavorite} />
            </FavoritesButton>

            {/* TRAILER */}
            <PlayTrailerButton
              type="button"
              onClick={() => setTrailerOpen(true)}
            >
              <FaPlay /> Play Trailer
            </PlayTrailerButton>
            <TrailerModal
              isOpen={trailerOpen}
              setIsOpen={setTrailerOpen}
              movie={details}
            />
          </Flex>

          {/* TEXT */}
          <Tagline>{details?.tagline}</Tagline>

          <OverviewTitle>Overview</OverviewTitle>
          <OverviewText>{details?.overview}</OverviewText>

          {/* CREDITS */}
          <Credits credits={credits} />
        </DetailsWrapper>
      </DetailsContainter>
      <FavoritesModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        item={details}
      />
    </DetailsPageWrapper>
  );
};

export default MovieTvShowDetails;
