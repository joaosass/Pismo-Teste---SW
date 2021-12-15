import axios from 'axios';

const getMovies = async (movieId: string = '') => {
  try {
    const result = await axios.get(`https://swapi-deno.azurewebsites.net/api/films/${movieId}`);
    // return movieId ? result.data : result.data.results;
    return result.data;
  } catch (err) {
    return false;
  }
}

export default getMovies;