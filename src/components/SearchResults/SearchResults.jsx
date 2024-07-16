import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchAllByKeyword } from '../../utils/fetch';
import SearchButton from './SearchButton';
import SearchCards from './SearchCards';
import {
  NoResultsText,
  SearchPage,
} from '../../styles/SearchResults/Search.styled';
import { filterSearchResults } from '../../utils/functions';
import { Flex } from '@chakra-ui/react';

const SearchResults = () => {
  //Params
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  //State
  const [results, setResults] = useState([]);
  const [category, setCategory] = useState(
    searchParams.get('category') === '' ? 'tv' : searchParams.get('category')
  );
  const [noResults, setNoResults] = useState(false);

  //Functions
  const fetchData = async () => {
    setNoResults(false);
    const { data } = await fetchAllByKeyword(searchQuery);

    const results = {
      ...Object.groupBy(data.results, ({ media_type }) => media_type),
    };

    results.movie = filterSearchResults(results.movie);
    results.tv = filterSearchResults(results.tv);
    results.person = filterSearchResults(results.person);

    const noTVResults = results?.tv.length < 1;
    const noMovieResults = results?.movie.length < 1;
    const noPersonResults = results?.person.length < 1;

    if (noTVResults && noMovieResults && noPersonResults) {
      setNoResults(true);
    } else if (noTVResults && noMovieResults) {
      setCategory('person');
    } else if (noTVResults) {
      setCategory('movie');
    }

    setResults({ ...results });
  };

  //On load
  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  return (
    <SearchPage>
      {noResults ? (
        <Flex minH="80vh" align="center" justify="center">
          <NoResultsText>No results for the searched term...</NoResultsText>
        </Flex>
      ) : (
        <>
          <SearchButton
            category={category}
            setCategory={setCategory}
            results={results}
          ></SearchButton>

          <SearchCards results={results} category={category}></SearchCards>
        </>
      )}
    </SearchPage>
  );
};

export default SearchResults;
