/* eslint-disable react/prop-types */
import {
  BackgroundWrapper,
  TrailersSlider,
  WhiteTitle,
} from '../../styles/Home/LatestTrailers.styled';
import TrailerCard from './TrailerCard';
import { FadeWrapper } from '../../styles/Home/TrendingMovies.styled';
import { useEffect, useMemo, useRef, useState } from 'react';
import { checkElementVisibility } from '../../utils/functions';

const LatestTrailers = ({ trailers }) => {
  //State
  const [fadeVisible, setFadeVisible] = useState(true);

  //Refs
  const lastEl = useRef(null);

  //Functions
  const getRef = (index) => (index === trailers.length - 1 ? lastEl : null);

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

  //On load
  useEffect(() => {
    scrollHandler();
  }, []);

  return (
    <FadeWrapper $fade={fade}>
      <BackgroundWrapper>
        <WhiteTitle>Latest Trailers</WhiteTitle>
        <TrailersSlider onScroll={scrollHandler}>
          {trailers &&
            trailers?.length > 0 &&
            trailers.map((movie, index) => (
              <TrailerCard key={movie.id} movie={movie} ref={getRef(index)} />
            ))}
        </TrailersSlider>
      </BackgroundWrapper>
    </FadeWrapper>
  );
};

export default LatestTrailers;
