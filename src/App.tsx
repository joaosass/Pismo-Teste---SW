import React from 'react';
import './index.css';
import Home from './pages/Home';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/movie/:movieId" element={<Movie />} />
    <Route path="/" element={<Home />} />
  </Routes>
}

export default App;
