import React from 'react';
import './index.css';
import Home from './pages/Home';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';
import WhereIsLuke from './pages/WhereIsLuke';
import MostAppearances from './pages/MostAppearances';
import LastEdit from './pages/LastEdit';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/movie/:movieId" element={<Movie />} />
    <Route path="/where-is-luke" element={<WhereIsLuke />} />
    <Route path="/most-appearances" element={<MostAppearances />} />
    <Route path="/last-edit-at-empire-strike-back" element={<LastEdit />} />
    <Route path="/" element={<Home />} />
  </Routes>
}

export default App;
