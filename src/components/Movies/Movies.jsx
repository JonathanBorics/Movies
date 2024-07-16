/* eslint-disable no-constant-condition */
import { useEffect, useState } from 'react';
import CardList from './CardList';
import { fetchMovies } from '../../utils/fetch';
import { Flex, Spinner } from '@chakra-ui/react';


export default function Movies() {
  //State
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  //Functions
  const fetchMovie = async () => {
    setIsFetching(true);
    const { data } = await fetchMovies();

    setMovies(data.results);
    setIsFetching(false);
  };

  //Onload
  useEffect(() => {
    fetchMovie();
  }, []);

  return isFetching ? (
    <Flex align="center" justify="center" minH="90vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  ) : (
    <CardList items={movies} type={'movies'} />
  );
}
