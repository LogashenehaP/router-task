import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../NavBar/Nav';
import Create from '../Display/Create/Create';
import Search from '../Display/Search/Search';
import Trending from '../Display/Trending/Trending';
import Home from '../Display/Home/Home';
import { Container, FullContainer } from './RouterComponentStyle';
import { SubContainer } from './RouterComponentStyle';
import NewPage from '../../dashboard/NewPage/NewPage';
const RouterComponent = () => {
  return (
    <FullContainer>
      <BrowserRouter>
        <Container>
          <Nav />
          <SubContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/create" element={<Create />} />
              <Route path="/newPage" element={<NewPage />} />
            </Routes>
          </SubContainer>
        </Container>
      </BrowserRouter>
    </FullContainer>
  );
};
export default RouterComponent;
