import { useDispatch, useSelector } from 'react-redux';

import Icon from '../Icon/Icon';
import {
  clearFavorites,
  selectFavoriteIds,
  selectFavoritesCount,
} from '../../store/favoritesSlice';
import { speakers } from '../../data/content';
import starIcon from '../../assets/icons/icon-star.svg';
import styles from './Favorites.module.css';

/**
 * Favorites - счётчик избранных спикеров.
 *
 * Компонент не принимает props и не связан с карточками напрямую.
 * Он подписывается на срез favorites и перерисовывается, когда любая
 * карточка отправит действие toggleFavorite.
 */
function Favorites() {
  const count = useSelector(selectFavoritesCount);
  const favoriteIds = useSelector(selectFavoriteIds);
  const dispatch = useDispatch();

  const names = speakers
    .filter((speaker) => favoriteIds.includes(speaker.id))
    .map((speaker) => speaker.name)
    .join(', ');

  const suffix = count === 1 ? 'спикер' : count >= 2 && count <= 4 ? 'спикера' : 'спикеров';

  return (
    <div className={`${styles.panel} ${count ? styles.panelActive : ''}`}>
      <Icon
        src={starIcon}
        size={24}
        className={count ? styles.iconActive : styles.icon}
      />

      <span className={styles.text}>
        <span className={styles.count}>
          {count === 0 ? 'Избранное пусто' : `В избранном: ${count} ${suffix}`}
        </span>
        <span className={styles.names}>
          {count === 0 ? 'Отметьте доклады звёздочкой на карточке' : names}
        </span>
      </span>

      {count > 0 && (
        <button
          type="button"
          className={styles.clear}
          onClick={() => dispatch(clearFavorites())}
        >
          Очистить
        </button>
      )}
    </div>
  );
}

export default Favorites;
