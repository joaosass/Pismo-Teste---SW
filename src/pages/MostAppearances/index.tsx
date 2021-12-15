import React, { useEffect, useState } from 'react';
import getMovies from '../../utils/getMovies';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Container from '../../components/Container';
import { Character } from './styles';

const MostAppearances: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<string[]>([]);

  const handleGetAppearances = async () => {
    let result = await getMovies();
    if (result) {
      let count = [] as any;
      result.map((movie) => {
        movie.characters.map((character: string) => {
          if (!count[character]) {
            count[+character] = {
              id: character,
              count: 0
            };
          }
          count[+character].count++;
        });
      });
      let characters = count.sort((a, b) => b.count - a.count);
      setCharacters(characters.filter((character) => {
        return character.count === characters[0].count;
      }).map((item) => item.id));
    }
    setIsLoading(false);
  }

  return (
    <main>
      <Header />
      <Container>
        <Loading isVisible={isLoading} />
        {(!characters.length && !isLoading) && <Button onClick={handleGetAppearances}>Who had most appearances?</Button>}
        {characters.map((item, index) => {
          return <Character key={index}>{item}</Character>
        })}
      </Container>
    </main>
  );
}

export default MostAppearances;
