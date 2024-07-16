/* eslint-disable react/prop-types */
import Movie from "../Movies/Movie";
import { Box, Flex } from "../Movies/Movies.styled";

const FavoriteCard = ({ item }) => {
  
 
  return (
    <Flex>
      {  item.map((fav) => (
        <Box key={fav.id}>
          <Movie movie={fav}></Movie>
        </Box>
      ))}
    </Flex>
  );
};

export default FavoriteCard;
