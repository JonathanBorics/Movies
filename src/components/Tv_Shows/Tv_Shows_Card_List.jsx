import Movie from "../Movies/Movie";
import { Box, Flex } from "../Movies/Movies.styled";
/* eslint-disable react/prop-types */
const Tv_Shows_Card_List = ({ item, type }) => {
  return (
    <Flex>
      {type === "tv" &&
        item.map((tv) => (
          <Box key={tv.id}>
            <Movie movie={tv}></Movie>
          </Box>
        ))}
    </Flex>
  );
};
export default Tv_Shows_Card_List;
