import PropTypes from 'prop-types';
import Item from 'components/ListItem';
import { CastomList } from './CastomList.styles';

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default function List({ data }) {
  return (
    <CastomList>
      {data.map(({ id, original_title, poster_path }) => (
        <Item key={id} id={id} value={original_title} imageUrl={poster_path} />
      ))}
    </CastomList>
  );
}
