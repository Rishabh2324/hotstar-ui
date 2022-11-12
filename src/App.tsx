import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layouts/Layout';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TV from './pages/TV';
import Sports from './pages/Sports';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
