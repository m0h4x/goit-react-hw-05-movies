import { fetchMovieDetails } from 'services/api';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import MovieDetails from 'components/MovieDetails';
import { Button } from './Button.styles';
import { Layout } from './Layout.styles';
import { BoxInfo } from './BoxInfo.styles';
import { TitleInfo } from './TitleInfo.styles';
import { LinkInfo } from './LinkInfo.styles';

MovieDetailsPage.propTypes = {
  children: PropTypes.element,
};

export default function MovieDetailsPage({ children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { postId } = useParams();
  const navigate = useNavigate();

  const fetch = async postId => {
    try {
      const data = await fetchMovieDetails(postId);
      setData(data);
    } catch (error) {
      setData(null);
      setError('Error server!!!');
    }
  };

  useEffect(() => {
    fetch(postId);
  }, [postId]);

  const onOpenInfo = (e, kind) => {
    e.preventDefault();
    navigate(`/movies/${postId}/${kind}`, { replace: true });
  };

  return (
    <Layout>
      <Button type="button" onClick={() => navigate(-1)}>
        🡸 Go back
      </Button>

      {error && <h2>{error}</h2>}
      {data && <MovieDetails data={data} />}
      <BoxInfo>
        <TitleInfo>Additional information</TitleInfo>
        <LinkInfo
          href={`/movies/${postId}/cast`}
          onClick={e => onOpenInfo(e, 'cast')}
        >
          Cast
        </LinkInfo>

        <LinkInfo
          href={`/movies/${postId}/reviews`}
          onClick={e => onOpenInfo(e, 'reviews')}
        >
          Reviews
        </LinkInfo>
      </BoxInfo>
      {children}
    </Layout>
  );
}
