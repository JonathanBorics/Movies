import { useEffect, useState } from 'react';
import LatestTrailers from './LatestTrailers';
import TrendingMovies from './TrendingMovies';
import {
  fetchMoviesWithTrailers,
  fetchTrendingMovies,
} from '../../utils/fetch';
import { Flex, Spinner } from '@chakra-ui/react';

const Home = () => {
  //State
  const [movies, setMovies] = useState([]);
  const [timeWindow, setTimeWindow] = useState('day');
  const [trailers, setTrailers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  //Functions
  const fetchMovies = async (timeWindow) => {
    const { data } = await fetchTrendingMovies(timeWindow);

    setMovies([...data.results]);
  };

  const fetchTrailers = async () => {
    setIsFetching(true);
    const trailers = await fetchMoviesWithTrailers();

    setTrailers(trailers);
    setIsFetching(false);
  };

  //On load
  useEffect(() => {
    fetchTrailers();
  }, []);

  //On time window change
  useEffect(() => {
    fetchMovies(timeWindow);
  }, [timeWindow]);

  return isFetching ? (
    <Flex minH="90vh" align="center" justify="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  ) : (
    <>
      <TrendingMovies
        movies={movies}
        timeWindow={timeWindow}
        setTimeWindow={setTimeWindow}
      />
      <LatestTrailers trailers={trailers} />
    </>
  );
};

export default Home;
