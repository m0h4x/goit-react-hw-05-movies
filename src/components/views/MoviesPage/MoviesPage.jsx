import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SearchBar from 'components/SearchBar';
import { fetchSearchMovie } from 'services/api';

import List from 'components/List';

export default function MoviesPage() {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const search = new URLSearchParams(useLocation().search).get('query');

  const fetch = async search => {
    try {
      const data = await fetchSearchMovie(search);
      if (data.total_results !== 0) {
        setData([...data.results]);
        setError(null);
        return;
      }
      throw new Error('ERROR RESULT NULL');
    } catch (error) {
      setData(null);
      setError(error.message);
    }
  };

  const handleSubmit = data => {
    navigate({
      search: `query=${data}`,
    });
  };

  useEffect(() => {
    setSearchValue(search);
  }, [search]);

  useEffect(() => {
    if (searchValue) {
      fetch(searchValue);
    }
  }, [searchValue]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {data && <List data={data} />}
      {error && <h2>{error}</h2>}
    </>
  );
}
