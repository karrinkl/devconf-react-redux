import { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import ticketIcon from '../../assets/icons/icon-arrow-right.svg';
import styles from './RegistrationForm.module.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * RegistrationForm - форма регистрации на конференцию.
 *
 * Компонент хранит три единицы локального состояния через useState:
 * email - текущее значение поля, обновляется обработчиком onChange;
 * error - текст ошибки валидации, определяет состояние Error поля;
 * isRegistered - признак успешной отправки, переключает разметку.
 */
function RegistrationForm({
  helperText = 'Билет придёт на эту почту',
  onRegister = () => {},
}) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
    if (error) {
      setError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('Введите корректный e-mail');
      return;
    }

    setError('');
    setIsRegistered(true);
    onRegister(email.trim());
  };

  if (isRegistered) {
    return (
      <p className={styles.success}>
        <span className={styles.successMark}>OK</span>
        Билет отправлен на {email.trim()}
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <InputField
        label="E-mail"
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="you@example.com"
        helper={error || helperText}
        hasError={Boolean(error)}
      />

      <div className={styles.submit}>
        <Button type="submit" variant="primary" icon={ticketIcon}>
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
}

RegistrationForm.propTypes = {
  /** Подсказка под полем в отсутствие ошибки */
  helperText: PropTypes.string,
  /** Вызывается после успешной отправки, получает введённый e-mail */
  onRegister: PropTypes.func,
};

export default RegistrationForm;
