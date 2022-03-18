import PropTypes from 'prop-types';
import { DetailsBox } from './DetailsBox.styles';
import { ParamsBox } from './ParamsBox.styles';
import { Image } from './Image.styles';
import noFoto from '../../images/noFoto.png';

MovieDetails.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    original_title: PropTypes.string.isRequired,
  }),
};

export default function MovieDetails({ data }) {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
    original_title,
  } = data;
  return (
    <DetailsBox>
      <div>
        <Image
          src={
            !poster_path
              ? noFoto
              : `https://image.tmdb.org/t/p/w500/${poster_path}`
          }
          alt={title}
        />
      </div>
      <ParamsBox>
        <h3>{`${original_title} (${release_date.slice(0, 4)})`}</h3>
        <p>{`User Score: ${vote_average * 10}%`}</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h5>Ganres</h5>
        <p>{genres.map(({ name }) => name).join(', ')}</p>
      </ParamsBox>
    </DetailsBox>
  );
}
