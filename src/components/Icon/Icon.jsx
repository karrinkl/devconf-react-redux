import PropTypes from 'prop-types';
import styles from './Icon.module.css';

/**
 * Icon - служебный презентационный компонент.
 * Не хранит состояния, полностью управляется через props.
 */
function Icon({ src, size = 24, className = '' }) {
  return (
    <span
      className={className ? `${styles.icon} ${className}` : styles.icon}
      style={{ '--icon-source': `url(${src})`, '--icon-size': `${size}px` }}
      aria-hidden="true"
    />
  );
}

Icon.propTypes = {
  /** Путь к SVG-файлу, импортированному из src/assets/icons */
  src: PropTypes.string.isRequired,
  /** Размер стороны иконки в пикселях */
  size: PropTypes.number,
  /** Дополнительный CSS-класс от родительского компонента */
  className: PropTypes.string,
};

export default Icon;
