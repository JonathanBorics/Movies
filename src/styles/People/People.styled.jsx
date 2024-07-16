import styled from 'styled-components';
import { breakpoints } from '../Variables.styled';
import ReactPaginate from 'react-paginate';

export const PeopleWrapper = styled.div`
  padding: 10px 20px;

  @media only screen and (min-width: ${breakpoints.md}) {
    padding: 20px 40px;
  }
`;

export const PeopleTitle = styled.div`
  color: #000;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 700;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 25px;
    margin-bottom: 15px;
  }
`;

export const Pagination = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  list-style: none;
  margin-top: 15px;

  .page {
    background-color: transparent;
    padding: 0 10px;
    border-radius: 5px;
  }

  .link {
    font-size: 18px;
  }

  .next,
  .previous {
    font-size: 18px;
    color: #000;
  }

  .disabled {
    color: lightgray;
  }

  .active-page {
    background-color: #e1e1e1;
  }
`;
