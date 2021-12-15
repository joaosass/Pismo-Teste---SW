import React, { useEffect, useState } from 'react';
import getMovies from '../../utils/getMovies';
import { IMovie } from '../../types/IMovie';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Container from '../../components/Container';
import MovieCover from '../../components/MovieCover';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    handleGetMovies();
  }, []);

  const handleGetMovies = async () => {
    let result = await getMovies();
    if (result) {
      setMovies(result);
    }
    setIsLoading(false);
  }

  return (
    <main>
      <Header />
      <Container>
        <Loading isVisible={isLoading} />
        {movies.map((movie: IMovie, index: number) => {
          return <MovieCover key={index} data={movie} id={index + 1} />
        })}
      </Container>
    </main>
  );
}

export default Home;
