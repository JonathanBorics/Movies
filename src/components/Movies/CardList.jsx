/* eslint-disable react/prop-types */
import Movie from "./Movie";
import { Box, Flex } from "./Movies.styled";
const CardList = ({ items, type }) => {
  return (
    <Flex>
      {type === "movies" &&
        items.map((movie, index) => (
          <Box number={index} key={movie.id}>
            <Movie movie={movie} />
          </Box>
        ))}
    </Flex>
  );
};
export default CardList;
