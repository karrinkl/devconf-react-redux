import { useId } from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

/**
 * InputField - поле ввода с подписью и подсказкой.
 *
 * Соответствует набору Input/Registration из ЛР № 17. Компонент
 * управляемый: значение и обработчик изменения приходят через props,
 * поэтому собственного состояния у него нет. Состояние хранит
 * родительский компонент RegistrationForm.
 */
function InputField({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  helper = '',
  hasError = false,
}) {
  const inputId = useId();
  const helperId = useId();

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>

      <input
        id={inputId}
        className={`${styles.input} ${hasError ? styles.inputError : ''}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        aria-invalid={hasError}
        aria-describedby={helper ? helperId : undefined}
      />

      {helper && (
        <span
          id={helperId}
          className={`${styles.helper} ${hasError ? styles.helperError : ''}`}
        >
          {helper}
        </span>
      )}
    </div>
  );
}

InputField.propTypes = {
  /** Подпись поля. В Figma свойство Label */
  label: PropTypes.string.isRequired,
  /** Текущее значение поля. В Figma свойство Value */
  value: PropTypes.string.isRequired,
  /** Обработчик события onChange, переданный родителем */
  onChange: PropTypes.func.isRequired,
  /** Тип поля ввода */
  type: PropTypes.string,
  /** Текст подсказки внутри пустого поля */
  placeholder: PropTypes.string,
  /** Текст под полем. В Figma свойство Helper */
  helper: PropTypes.string,
  /** Признак состояния Error */
  hasError: PropTypes.bool,
};

export default InputField;
