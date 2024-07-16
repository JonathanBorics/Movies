import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { breakpoints } from '../Variables.styled';
import { HEADER_HEIGHT } from '../Global.styled';

export const NavbarWrapper = styled.header`
  background-color: #032541;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  height: ${HEADER_HEIGHT};
  z-index: 10;

  width: 100%;
  padding: 0 10px;
  margin: 0;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const LinksWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.md}) {
    display: flex;
  }
`;

export const Icon = styled.p`
  color: #01b4e4;
  font-size: 30px;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px;
  cursor: pointer;
`;

export const LogoHTEC = styled.img`
  height: 45px;
  max-width: 200%;
  filter: invert(1);
  cursor: pointer;

  @media only screen and (min-width: ${breakpoints.md}) {
    height: 50px;
  }

  @media only screen and (min-width: ${breakpoints['2xl']}) {
    height: 60px;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 5px;
  padding: 5px;

  &:hover {
    color: #d1d1d1;
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    margin: 0 10px;
    font-size: 16px;
  }

  @media only screen and (min-width: ${breakpoints.xl}) {
    margin: 0 15px;
    font-size: 20px;
  }
`;

export const ResponsiveNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const HamburgerMenuBtn = styled(FaBars)`
  display: inline;

  @media only screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const HamburgerMenuWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  z-index: 100;
  background-color: #032541;
  animation: rollDown 0.3s ease;
  transform-origin: top;

  @media only screen and (min-width: ${breakpoints.md}) {
    display: none;
  }

  @keyframes rollDown {
    from {
      transform: translateY(100%) scaleY(0%);
    }
    to {
      transform: translateY(100%) scaleY(100%);
    }
  }
`;
