import { useState } from 'react';
import {
  Icon,
  LinksWrapper,
  NavLink,
  NavbarWrapper,
  LogoHTEC,
  ResponsiveNavContainer,
  HamburgerMenuBtn,
  HamburgerMenuWrapper,
} from '../../styles/Navbar/Navbar.styled';
import { FaHome } from 'react-icons/fa';
import { IoMdSearch } from 'react-icons/io';
import { useNavigate } from 'react-router';
import { IoMdClose } from 'react-icons/io';
import Search from './Search';

// Links
const links = [
  {
    path: '/movies',
    label: 'Movies',
  },
  {
    path: '/tvshows',
    label: 'Tv Shows',
  },
  {
    path: '/people',
    label: 'People',
  },
  {
    path: '/favorites',
    label: 'Favorites',
  },
];

export default function Navbar() {
  //State
  const [searchOpen, setSearchOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  //Hooks
  const navigate = useNavigate();

  //Functions
  const goToHomeHandler = () => navigate(`/`);

  const toggleSearchHandler = () => setSearchOpen((prev) => !prev);

  const toggleHamburgerHandler = () => setHamburgerOpen((prev) => !prev);

  return (
    <NavbarWrapper>
      <ResponsiveNavContainer>
        <a href="https://htecgroup.com" target="_blank">
          <LogoHTEC src="../../../public/logo.png" />
        </a>
        <LinksWrapper>
          {links.map((link) => (
            <NavLink key={link.path} to={link.path}>
              {link.label}
            </NavLink>
          ))}
        </LinksWrapper>
        <Icon>
          {!searchOpen &&
            (hamburgerOpen ? (
              <IoMdClose onClick={toggleHamburgerHandler} />
            ) : (
              <HamburgerMenuBtn onClick={toggleHamburgerHandler} />
            ))}
          {!hamburgerOpen &&
            (searchOpen ? (
              <IoMdClose onClick={toggleSearchHandler} />
            ) : (
              <>
                <FaHome onClick={goToHomeHandler} />
                <IoMdSearch onClick={toggleSearchHandler} />
              </>
            ))}
        </Icon>
      </ResponsiveNavContainer>
      {!searchOpen && hamburgerOpen && (
        <HamburgerMenuWrapper>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={toggleHamburgerHandler}
            >
              {link.label}
            </NavLink>
          ))}
        </HamburgerMenuWrapper>
      )}
      {!hamburgerOpen && searchOpen && <Search />}
    </NavbarWrapper>
  );
}
