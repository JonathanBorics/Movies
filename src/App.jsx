import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Movies from './components/Movies/Movies';
import TvShows from './components/Tv_Shows/TvShows';
import People from './components/People/People';
import Favorites from './components/Favorites/Favorites';
import GLobalStyle, { RootWrapper } from './styles/Global.styled';
import Home from './components/Home/Home';
import MovieTvShowDetails from './components/Movies/MovieTvShowDetails';
import { ChakraProvider } from '@chakra-ui/react';
import ActorDetails from './components/People/ActorDetails';
import SearchResults from './components/SearchResults/SearchResults';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <GLobalStyle />
        <Navbar />
        <RootWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Movies" element={<Movies />} />
            <Route
              path="Movies/:id"
              element={<MovieTvShowDetails type={'movie'} />}
            />
            <Route path="TvShows" element={<TvShows />} />
            <Route
              path="TvShows/:id"
              element={<MovieTvShowDetails type={'tv'} />}
            />
            <Route path="People" element={<People />} />
            <Route path="People/:id" element={<ActorDetails />} />
            <Route path="Favorites" element={<Favorites />} />
            <Route path="Search" element={<SearchResults />} />
          </Routes>
        </RootWrapper>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
