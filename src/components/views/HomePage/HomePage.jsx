import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { fetchTrendingMovie } from 'services/api';

import List from 'components/List';
import { Title } from './Title.styles';

export default function HomePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetch = async () => {
    try {
      const data = await fetchTrendingMovie();
      setData([...data.results]);
    } catch (error) {
      setData(null);
      setError('Error server!!!');
    }
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') {
      navigate('/', { replace: true });
    } else {
      fetch();
    }
  }, [pathname, navigate]);

  return (
    <>
      <Title> Trending today</Title>
      {data && <List data={data} />}
      {error && <h2>{error}</h2>}
    </>
  );
}
