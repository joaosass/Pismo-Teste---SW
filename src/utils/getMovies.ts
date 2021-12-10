import axios from 'axios';

const getMovies = async (movieId: string = '') => {
  try {
    const result = await axios.get(`https://swapi.dev/api/films/${movieId}`);
    return movieId ? result.data : result.data.results;
  } catch (err) {
    return false;
  }
}

export default getMovies;