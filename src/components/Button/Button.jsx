import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import arrowRightIcon from '../../assets/icons/icon-arrow-right.svg';
import styles from './Button.module.css';

/**
 * Button - кнопка призыва к действию.
 *
 * Соответствует набору Button/CTA из ЛР № 17. Вариант оформления
 * задаётся через prop variant, а состояния Hover, Pressed и Disabled
 * описаны псевдоклассами CSS, поэтому отдельных props для них нет.
 *
 * Компонент не хранит состояния: он полностью управляется родителем.
 */
function Button({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  showIcon = true,
  icon = arrowRightIcon,
  onClick = undefined,
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{children}</span>
      {showIcon && <Icon src={icon} size={24} />}
    </button>
  );
}

Button.propTypes = {
  /** Подпись кнопки. В Figma этому соответствует свойство Label */
  children: PropTypes.node.isRequired,
  /** Вариант оформления. В Figma свойство Type */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Тип HTML-кнопки */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Состояние Disabled из набора вариантов */
  disabled: PropTypes.bool,
  /** Показывать ли иконку. В Figma свойство Show Icon */
  showIcon: PropTypes.bool,
  /** Путь к иконке. В Figma свойство Icon типа Instance swap */
  icon: PropTypes.string,
  /** Обработчик клика */
  onClick: PropTypes.func,
};

export default Button;
