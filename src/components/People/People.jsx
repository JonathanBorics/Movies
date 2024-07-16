import { Flex, Spinner } from '@chakra-ui/react';
import {
  Pagination,
  PeopleTitle,
  PeopleWrapper,
} from '../../styles/People/People.styled';
import PersonCard from './PersonCard';
import { useEffect, useState } from 'react';
import { fetchPopularPeople } from '../../utils/fetch';

export default function People() {
  //State
  const [people, setPeople] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  //Functions
  const fetchPeople = async () => {
    setIsFetching(true);

    const { data } = await fetchPopularPeople(currentPage);

    setPeople((prevVal) => ({ ...prevVal, [currentPage]: [...data.results] }));

    setIsFetching(false);
  };

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);

    window.scrollTo(0, 0);
  };

  //Onload
  useEffect(() => {
    people[currentPage]?.length > 0 ? null : fetchPeople();
  }, [currentPage]);

  return (
    <PeopleWrapper>
      <PeopleTitle>Popular People</PeopleTitle>

      {isFetching ? (
        <Flex align="center" justify="center" minH="75vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
        <Flex
          align="flex-start"
          justify="space-between"
          flexWrap="wrap"
          rowGap={5}
        >
          {people[currentPage]?.length > 0 &&
            people[currentPage]?.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
        </Flex>
      )}

      <Pagination
        breakLabel=""
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={0}
        pageCount={30}
        previousLabel="<"
        pageLinkClassName="link"
        pageClassName="page"
        activeClassName="active-page"
        previousClassName="previous"
        nextClassName="next"
        disabledClassName="disabled"
        renderOnZeroPageCount={null}
      />
    </PeopleWrapper>
  );
}
