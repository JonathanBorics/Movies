/* eslint-disable react/prop-types */
import { useSearchParams } from 'react-router-dom';
import {
  Text,
  Box,
  Flex,
  Button,
  ButtonCount,
} from '../../styles/SearchResults/Search.styled';

const SearchButton = ({ setCategory, results, category }) => {
  //Params
  const [searchParams, setSearchParams] = useSearchParams();

  //Functions
  const clickHandler = (cat) => {
    const query = searchParams.get('query');
    setSearchParams({ query, category: cat });
    setCategory(cat);
  };

  return (
    <Flex>
      <Box>
        <Text>Search results</Text>
        <Button
          $active={category === 'movie' ? 'true' : 'false'}
          onClick={() => clickHandler('movie')}
          disabled={results?.movie?.length < 1}
        >
          Movie
          <ButtonCount $active={category === 'movie' ? 'true' : 'false'}>
            {results?.movie?.length ?? 0}
          </ButtonCount>
        </Button>
        <Button
          $active={category === 'tv' ? 'true' : 'false'}
          onClick={() => clickHandler('tv')}
          disabled={results?.tv?.length < 1}
        >
          Tv Shows{' '}
          <ButtonCount $active={category === 'tv' ? 'true' : 'false'}>
            {results?.tv?.length ?? 0}
          </ButtonCount>
        </Button>
        <Button
          $active={category === 'person' ? 'true' : 'false'}
          onClick={() => clickHandler('person')}
          disabled={results?.person?.length < 1}
        >
          People
          <ButtonCount $active={category === 'person' ? 'true' : 'false'}>
            {results?.person?.length ?? 0}
          </ButtonCount>
        </Button>
      </Box>
    </Flex>
  );
};

export default SearchButton;
