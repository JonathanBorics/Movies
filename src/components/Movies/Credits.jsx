/* eslint-disable react/prop-types */
import { Box, Flex } from "@chakra-ui/react";
import { JobText, NameText } from "../../styles/Movies/Credits.styled";

const Credits = ({ credits }) => {
  return (
    <Flex wrap="wrap" marginTop={4} gap={{ base: 30, md: 0 }}>
      {credits.map((credit) => (
        <Box flexBasis={`${100 / 3}%`} key={credit?.cast_id ?? credit?.id}>
          <NameText>{credit?.name}</NameText>
          <JobText>{credit?.character ?? credit?.job}</JobText>
        </Box>
      ))}
    </Flex>
  );
};

export default Credits;
