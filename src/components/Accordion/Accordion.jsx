import { useId, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import chevronIcon from '../../assets/icons/icon-chevron-down.svg';
import styles from './Accordion.module.css';

/**
 * Accordion - раскрывающийся блок раздела FAQ.
 *
 * Соответствует набору Accordion/FAQ из ЛР № 17. Компонент управляет
 * собственным состоянием открыт/закрыт с помощью хука useState:
 * значение isOpen переключается обработчиком onClick на заголовке
 * и определяет видимость панели с ответом, поворот шеврона и
 * цвет рамки.
 */
function Accordion({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  const handleToggle = () => {
    setIsOpen((previousState) => !previousState);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.expanded : ''}`}>
      <button
        type="button"
        className={styles.header}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className={styles.question}>{question}</span>
        <Icon
          src={chevronIcon}
          size={24}
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
        />
      </button>

      {isOpen && (
        <div className={styles.panel} id={panelId} role="region">
          {answer}
        </div>
      )}
    </div>
  );
}

Accordion.propTypes = {
  /** Текст вопроса. В Figma свойство Question */
  question: PropTypes.string.isRequired,
  /** Текст ответа. В Figma свойство Answer */
  answer: PropTypes.string.isRequired,
  /** Начальное состояние блока при первом отображении */
  defaultOpen: PropTypes.bool,
};

export default Accordion;
