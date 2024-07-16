import styled from 'styled-components';
import { breakpoints } from '../Variables.styled';
import SearchInput from 'react-search-input';
import { FaSearch } from 'react-icons/fa';

export const SearchWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  width: 100%;
  z-index: 10;
  background-color: #fff;
  animation: rollDown 0.3s ease;
  transform-origin: top;

  @keyframes rollDown {
    from {
      transform: translateY(100%) scaleY(0%);
    }
    to {
      transform: translateY(100%) scaleY(100%);
    }
  }
`;

export const ResultsWrapper = styled.div`
  max-height: 200px;
  overflow: auto;

  @media only screen and (min-width: ${breakpoints.lg}) {
    max-height: 100%;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00b3e4;
  }
`;

export const SearchForm = styled.form`
  width: 100%;
  padding: 10px 10px;
  border-bottom: 1px solid grey;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 10px 40px;
  }
`;

export const Input = styled(SearchInput)`
  width: 100%;

  & > input {
    width: 100%;
    border: none;
    background-color: #fff;
    outline: none !important;
    font-style: italic;
    color: #9e9e9e;
    outline: none;
  }
`;

export const SmallSearchIcon = styled(FaSearch)`
  font-size: 12px;
`;

export const ResultWrapper = styled.div`
  border: 1px 0 1px 0 solid #000;
  padding: 0 10px;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;

  &:hover {
    cursor: pointer;
    background-color: #eee;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 0 40px;
  }
`;
