/* eslint-disable react/prop-types */
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ButtonsWrapper,
  MoviesSlider,
  FadeWrapper,
  Title,
  TrendingButton,
  Wrapper,
} from '../../styles/Home/TrendingMovies.styled';
import MovieCard from './MovieCard';
import { checkElementVisibility } from '../../utils/functions';

const TrendingMovies = ({ movies, timeWindow, setTimeWindow }) => {
  //State
  const [fadeVisible, setFadeVisible] = useState(true);

  //Refs
  const dayBtnRef = useRef(null);
  const weekBtnRef = useRef(null);
  const lastEl = useRef(null);

  //Functions
  const getColor = (filter) => {
    return timeWindow === filter ? '#ABF9CA' : '#032541';
  };

  const getRef = (index) => (index === movies.length - 1 ? lastEl : null);

  const scrollHandler = () => {
    if (lastEl.current) {
      const rect = lastEl.current.getBoundingClientRect();
      const isVisible = checkElementVisibility(rect);
      setFadeVisible(!isVisible);
    }
  };

  //Memo
  const fade = useMemo(() => {
    return fadeVisible ? 'true' : 'false';
  }, [fadeVisible]);

  const beforeWidth = useMemo(() => {
    const width =
      timeWindow === 'day'
        ? dayBtnRef?.current?.getBoundingClientRect().width
        : weekBtnRef?.current?.getBoundingClientRect().width;

    return width;
  }, [timeWindow, dayBtnRef, weekBtnRef]);

  //On load
  useEffect(() => {
    scrollHandler();
  }, []);

  return (
    <Wrapper>
      <Title>Trending</Title>
      <ButtonsWrapper $time={timeWindow} $before={beforeWidth}>
        <TrendingButton
          ref={dayBtnRef}
          $color={getColor('day')}
          onClick={() => setTimeWindow('day')}
        >
          Today
        </TrendingButton>
        <TrendingButton
          ref={weekBtnRef}
          $color={getColor('week')}
          onClick={() => setTimeWindow('week')}
        >
          This Week
        </TrendingButton>
      </ButtonsWrapper>

      <FadeWrapper $fade={fade}>
        <MoviesSlider onScroll={scrollHandler}>
          {movies &&
            movies?.length > 0 &&
            movies?.map((movie, index) => {
              return (
                <MovieCard key={movie.id} movie={movie} ref={getRef(index)} />
              );
            })}
        </MoviesSlider>
      </FadeWrapper>
    </Wrapper>
  );
};

export default TrendingMovies;
