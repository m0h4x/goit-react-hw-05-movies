import { Link } from 'react-router-dom';
import { Item } from './Item.styles';
import { Image } from './Image.styles';
import noFoto from '../../images/noFoto.png';
import s from './Link.module.css';

export default function ImageGalleryItem({ id, value, imageUrl }) {
  return (
    <Item>
      <Link className={s.link} to={`/movies/${id}`}>
        <Image
          src={
            !imageUrl ? noFoto : `https://image.tmdb.org/t/p/w500/${imageUrl}`
          }
          alt={value}
        />
        {value}
      </Link>
    </Item>
  );
}
