import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';

import Home from './pages/Home';
import Movies from './pages/Movies';
import TV from './pages/TV';
import Sports from './pages/Sports';
import Channels from './pages/Channels';
import Languages from './pages/Languages';
import Genres from './pages/Genres';
import WatchList from './pages/WatchList';
import Login from './pages/Login';
import ShowMore from './pages/ShowMore';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/my-watchlist" element={<WatchList />} />
          <Route path="/showmore" element={<ShowMore />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
