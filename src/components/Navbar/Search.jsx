import { Flex, Text } from '@chakra-ui/react';
import {
  Input,
  ResultWrapper,
  ResultsWrapper,
  SearchForm,
  SearchWrapper,
  SmallSearchIcon,
} from '../../styles/Navbar/Search.styled';
import { FaSearch } from 'react-icons/fa';
import { fetchAllByKeyword } from '../../utils/fetch';
import { useRef, useState } from 'react';
import { MdLocalMovies, MdPerson } from 'react-icons/md';
import { PiTelevisionSimpleFill } from 'react-icons/pi';
import { useNavigate } from 'react-router';
import { filterSearchResults } from '../../utils/functions';

const Search = () => {
  //State
  const [results, setResults] = useState([]);

  //Ref
  const inputRef = useRef(null);

  //Hooks
  const navigate = useNavigate();

  //Functions
  const changeHandler = async (value) => {
    const { data } = await fetchAllByKeyword(value);

    //Filter the results to check if the names repeat
    setResults([...filterSearchResults(data.results)]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    searchHandler();
  };

  const searchHandler = (payload) => {
    // Clear the current results
    setResults([]);

    // Get the search term from the payload or the input reference
    const searchTerm = payload?.searchTerm ?? inputRef.current.state.searchTerm;

    // Get the category from the payload, or use an empty string if not provided
    const category = payload?.category ?? '';

    // Construct the search URL with query parameters
    const searchUrl = `/search?query=${searchTerm}&category=${category}`;

    // Navigate to the constructed URL
    navigate(searchUrl);
  };

  return (
    <SearchWrapper>
      <SearchForm onSubmit={submitHandler}>
        <Flex align="center" justify="start" gap={5}>
          <FaSearch />
          <Input
            ref={inputRef}
            onChange={changeHandler}
            onSubmit={submitHandler}
          />
        </Flex>
      </SearchForm>
      {results.length > 0 && (
        <ResultsWrapper>
          <ResultWrapper onClick={() => searchHandler({ category: 'movie' })}>
            <MdLocalMovies />
            <Text fontWeight="600">{inputRef.current.state.searchTerm}</Text>
            <Text> in Movies</Text>
          </ResultWrapper>
          <ResultWrapper onClick={() => searchHandler({ category: 'tv' })}>
            <PiTelevisionSimpleFill />
            <Text fontWeight="600">{inputRef.current.state.searchTerm}</Text>
            <Text> in TV Shows</Text>
          </ResultWrapper>
          <ResultWrapper onClick={() => searchHandler({ category: 'person' })}>
            <MdPerson />
            <Text fontWeight="600">{inputRef.current.state.searchTerm}</Text>
            <Text> in People</Text>
          </ResultWrapper>
          {results.map((result) => (
            <ResultWrapper
              key={result.id}
              onClick={() =>
                searchHandler({ searchTerm: result.name ?? result.title })
              }
            >
              <SmallSearchIcon />
              <Text>
                {result.name ?? result.title}{' '}
                {(result?.original_title || result?.original_name) &&
                  `(${result.original_title ?? result.original_name})`}
              </Text>
            </ResultWrapper>
          ))}
        </ResultsWrapper>
      )}
    </SearchWrapper>
  );
};

export default Search;
