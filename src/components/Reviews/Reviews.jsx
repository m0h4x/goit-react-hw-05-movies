import { fetchMovieReviews } from 'services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Reviews() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { postId } = useParams();

  const fetch = async postId => {
    try {
      const data = await fetchMovieReviews(postId);
      if (data.total_results !== 0) {
        setData(data);
      }
    } catch (error) {
      setData(null);
      setError('Error server!!!');
    }
  };

  useEffect(() => {
    fetch(postId);
  }, [postId]);

  return (
    <>
      {error && <h2>{error}</h2>}
      {data ? (
        <ul>
          {data.results.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author} </h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </>
  );
}
