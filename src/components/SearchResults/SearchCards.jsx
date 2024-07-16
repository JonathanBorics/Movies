/* eslint-disable react/prop-types */
import { CardFlex } from '../../styles/SearchResults/Search.styled';
import SearchCard from './SearchCard';

const SearchCards = ({ results, category }) => {
  return (
    <CardFlex>
      {results?.[category] &&
        results?.[category]?.map((result) => (
          <SearchCard result={result} key={result.id} />
        ))}
    </CardFlex>
  );
};

export default SearchCards;
