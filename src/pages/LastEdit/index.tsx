import React, { useEffect, useState } from 'react';
import getMovies from '../../utils/getMovies';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Container from '../../components/Container';

const LastEdit: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [date, setDate] = useState('');

  const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  useEffect(() => {
    handleLastEditAtEmpireStrikeBack();
  }, []);

  const handleLastEditAtEmpireStrikeBack = async () => {
    setIsLoading(true);
    let result = await getMovies('2');

    if (result) {

      let editedDate = new Date(result.edited);
      setDate(`${days[editedDate.getDay()]}, ${editedDate.getDate()} de ${month[editedDate.getMonth()]} de ${editedDate.getFullYear()}`)
    }
    setIsLoading(false);
  }

  return (
    <main>
      <Header />
      <Container>
        <Loading isVisible={isLoading} />
        <h1>{date}</h1>
      </Container>
    </main>
  );
}

export default LastEdit;
