import React, { useState } from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import getMovies from '../../utils/getMovies';
import { IMovie } from '../../types/IMovie';
import Container from '../../components/Container';
import MovieCover from '../../components/MovieCover';

const WhereIsLuke: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<IMovie[]>([]);

  const handleWhereIsLuke = async () => {
    setIsLoading(true);
    const result = await getMovies();
    if (result) {
      setMovies(result.filter((item) => {
        return item.characters.includes(process.env.REACT_APP_LUKE_ID);
      }))
    }
    setIsLoading(false);
  }

  return (
    <main>
      <Header />
      <Container>
        {(!movies.length && !isLoading) && <Button onClick={handleWhereIsLuke}>Where is Luke?</Button>}
        <Loading isVisible={isLoading} />
        {movies.map((movie: IMovie, index: number) => {
          return <MovieCover key={index} data={movie} id={index + 1} />
        })}
      </Container>
    </main>
  );
}

export default WhereIsLuke;
