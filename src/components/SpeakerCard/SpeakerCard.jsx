import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '../Icon/Icon';
import { selectIsFavorite, toggleFavorite } from '../../store/favoritesSlice';
import calendarIcon from '../../assets/icons/icon-calendar.svg';
import locationIcon from '../../assets/icons/icon-location.svg';
import starIcon from '../../assets/icons/icon-star.svg';
import styles from './SpeakerCard.module.css';

/**
 * SpeakerCard - карточка спикера конференции.
 *
 * Данные доклада приходят через props. Признак «в избранном» компонент
 * не хранит локально: он читает его из глобального хранилища хуком
 * useSelector и меняет, отправляя действие toggleFavorite хуком
 * useDispatch. О существовании компонента Favorites карточка не знает.
 */
function SpeakerCard({
  id,
  name,
  role,
  topic,
  photo,
  photoRetina = undefined,
  date,
  hall,
}) {
  const isFavorite = useSelector(selectIsFavorite(id));
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <article className={styles.card}>
      <div className={styles.photoWrap}>
        <img
          className={styles.photo}
          src={photo}
          srcSet={photoRetina ? `${photo} 1x, ${photoRetina} 2x` : undefined}
          alt={`Фотография спикера: ${name}`}
          width="320"
          height="260"
          loading="lazy"
        />

        <button
          type="button"
          className={`${styles.favorite} ${isFavorite ? styles.favoriteActive : ''}`}
          onClick={handleToggleFavorite}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Убрать из избранного: ${name}`
              : `Добавить в избранное: ${name}`
          }
        >
          <Icon src={starIcon} size={20} />
        </button>
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <p className={styles.topic}>{topic}</p>

        <div className={styles.divider} />

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <Icon src={calendarIcon} size={18} className={styles.metaIcon} />
            {date}
          </span>
          <span className={styles.metaItem}>
            <Icon src={locationIcon} size={18} className={styles.metaIcon} />
            {hall}
          </span>
        </div>
      </div>
    </article>
  );
}

SpeakerCard.propTypes = {
  /** Идентификатор спикера, по нему ведётся список избранного */
  id: PropTypes.string.isRequired,
  /** Имя спикера. В Figma свойство Name */
  name: PropTypes.string.isRequired,
  /** Должность и место работы. В Figma свойство Role */
  role: PropTypes.string.isRequired,
  /** Тема доклада. В Figma свойство Topic */
  topic: PropTypes.string.isRequired,
  /** Изображение спикера в масштабе @1x */
  photo: PropTypes.string.isRequired,
  /** Изображение спикера в масштабе @2x для дисплеев Retina */
  photoRetina: PropTypes.string,
  /** Дата и время доклада */
  date: PropTypes.string.isRequired,
  /** Зал, в котором проходит доклад */
  hall: PropTypes.string.isRequired,
};

export default SpeakerCard;
