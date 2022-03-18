import { fetchMovieCredits } from 'services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastomList } from './CastomList.styles';
import { Image } from './Image.styles';
import { Item } from './Item.styles';
import noFoto from '../../images/noFoto.png';

export default function Cast() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { postId } = useParams();

  const fetch = async postId => {
    try {
      const data = await fetchMovieCredits(postId);
      setData(data.cast);
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
      {data && (
        <CastomList>
          {data.map(({ character, name, profile_path, id }) => (
            <Item key={id}>
              <Image
                src={
                  !profile_path
                    ? noFoto
                    : `https://image.tmdb.org/t/p/w500/${profile_path}`
                }
                width="50px"
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </Item>
          ))}
        </CastomList>
      )}
    </>
  );
}
