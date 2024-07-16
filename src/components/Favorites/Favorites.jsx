import { useEffect, useState } from "react";

import FavoriteCard from "./FavoriteCard";
import { Box, Text } from "@chakra-ui/react";
import { FaCircleExclamation } from "react-icons/fa6";
export default function Favorites() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('favorites')) ?? []
  );

  useEffect(() => {
    const handleChange = () => {
      const data = JSON.parse(localStorage.getItem('favorites'));

      setItems(data);
    };

    window.addEventListener('storage', handleChange);

    return () => {
      window.removeEventListener('storage', handleChange);
    };
  }, []);

  return (
    <>
      {Array.isArray(items) && items.length ? (
        <FavoriteCard item={items} />
      ) : (
        <Box display="flex" flexDirection="column" alignItems="center" gap={"10"} justifyContent="center" height="60vh">
          <FaCircleExclamation size="150px" color="#032541" />
          <Text align="center" fontSize="30px" color="#032541">
            No cards in favorites page
          </Text>
        </Box>
      )}
    </>
   
  );
}
