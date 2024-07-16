import { useParams } from 'react-router';
import { fetchActorDetails } from '../../utils/fetch';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import {
  ActorDetailsContainer,
  ActorDetailsPageWrapper,
  ActorDetailsSubtitle,
  ActorDetailsTitle,
  ActorDetailsWrapper,
  ActorImage,
  ActorImageWrapper,
} from '../../styles/People/ActorDetails.styled';
import ActorMovies from './ActorMovies';
import ActorBio from './ActorBio';
import { ActorMovieSlider } from '../../styles/People/ActorMovies.styled';
import { FadeWrapper } from '../../styles/Home/TrendingMovies.styled';
import defaultImage from '../../assets/img/person.png';
import { checkElementVisibility } from '../../utils/functions';

const ActorDetails = () => {
  //State
  const [details, setDetails] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [fadeVisible, setFadeVisible] = useState(true);

  //Refs
  const lastEl = useRef(null);

  //Params
  const { id } = useParams();

  //Memo
  const fade = useMemo(() => {
    return fadeVisible ? 'true' : 'false';
  }, [fadeVisible]);

  const { image, movies } = useMemo(() => {
    const image = details?.profile_path
      ? `${import.meta.env.VITE_APP_BASE_IMG_URL}/w500/${details.profile_path}`
      : defaultImage;

    return {
      image,
      movies: details?.combined_credits?.cast.slice(0, 15) ?? null,
    };
  }, [details]);

  //Functions
  const fetchDetails = async () => {
    setIsFetching(true);
    const { data } = await fetchActorDetails(id);

    setDetails({ ...data });
    setIsFetching(false);
  };

  const scrollHandler = () => {
    if (lastEl.current) {
      const rect = lastEl.current.getBoundingClientRect();
      const isVisible = checkElementVisibility(rect);
      setFadeVisible(!isVisible);
    }
  };

  //On load
  useEffect(() => {
    fetchDetails();
    scrollHandler();
  }, []);

  return (
    <ActorDetailsPageWrapper>
      {isFetching ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <ActorDetailsContainer>
          <ActorImageWrapper>
            <ActorImage src={image} />
          </ActorImageWrapper>
          <ActorDetailsWrapper>
            {/* NAME */}
            <ActorDetailsTitle>{details.name}</ActorDetailsTitle>

            {/* BIO */}
            <ActorDetailsSubtitle>Biography</ActorDetailsSubtitle>
            <ActorBio bio={details?.biography} />

            {/* MOVIES */}
            <ActorDetailsSubtitle >Known for</ActorDetailsSubtitle>
            <FadeWrapper $fade={fade}>
              <ActorMovieSlider onScroll={scrollHandler}>
                <ActorMovies movies={movies} ref={lastEl} />
              </ActorMovieSlider>
            </FadeWrapper>
          </ActorDetailsWrapper>
        </ActorDetailsContainer>
      )}
    </ActorDetailsPageWrapper>
  );
};

export default ActorDetails;
