import { useEffect, useState } from 'react';
import { fetchTvshows } from '../../utils/fetch';
import Tv_Shows_Card_List from './Tv_Shows_Card_List';
import { Flex, Spinner } from '@chakra-ui/react';

export default function TvShows() {
  //State
  const [tvshows, setTvshows] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  //Functions
  const fetchTv = async () => {
    setIsFetching(true);
    const { data } = await fetchTvshows();

    setTvshows(data.results);
    setIsFetching(false);
  };

  //Onload
  useEffect(() => {
    fetchTv();
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
    <Tv_Shows_Card_List item={tvshows} type={'tv'} />
  );
}
