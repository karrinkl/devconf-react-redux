import Button from './components/Button/Button';
import SpeakerCard from './components/SpeakerCard/SpeakerCard';
import Accordion from './components/Accordion/Accordion';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Favorites from './components/Favorites/Favorites';

import logo from './assets/icons/logo-devconf-full-inverse.svg';
import microphoneIcon from './assets/icons/icon-microphone.svg';
import heroImage from './assets/images/banner-hero-1x.webp';

import { speakers, faqItems } from './data/content';
import styles from './App.module.css';

/**
 * App - корневой компонент демонстрационной страницы.
 * Собирает секции лендинга из компонентов библиотеки и передаёт
 * им данные через props.
 */
function App() {
  const handleRegister = (email) => {
    console.log('Зарегистрирован участник:', email);
  };

  const scrollToSpeakers = () => {
    document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.page}>
      <header
        className={styles.hero}
        style={{ '--hero-image': `url(${heroImage})` }}
      >
        <img className={styles.logo} src={logo} alt="DEVCONF 2026" />

        <h1 className={styles.heroTitle}>
          Конференция инженеров и разработчиков, 18 мая 2026
        </h1>

        <p className={styles.heroSubtitle}>
          Минск · 24 доклада · 6 воркшопов · онлайн-трансляция бесплатно
        </p>

        <div className={styles.heroActions}>
          <Button variant="primary" onClick={scrollToSpeakers}>
            Купить билет
          </Button>
          <Button
            variant="secondary"
            icon={microphoneIcon}
            onClick={scrollToSpeakers}
          >
            Смотреть программу
          </Button>
        </div>
      </header>

      <section className={styles.section} id="speakers">
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Спикеры</h2>
          <Favorites />
        </div>

        <div className={styles.cards}>
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              id={speaker.id}
              name={speaker.name}
              role={speaker.role}
              topic={speaker.topic}
              photo={speaker.photo}
              photoRetina={speaker.photoRetina}
              date={speaker.date}
              hall={speaker.hall}
            />
          ))}
        </div>
      </section>

      <section className={styles.section} id="faq">
        <h2 className={styles.sectionTitle}>Частые вопросы</h2>

        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <Accordion
              key={item.id}
              question={item.question}
              answer={item.answer}
              defaultOpen={item.defaultOpen}
            />
          ))}
        </div>
      </section>

      <section className={styles.section} id="registration">
        <h2 className={styles.sectionTitle}>Регистрация</h2>
        <RegistrationForm onRegister={handleRegister} />
      </section>

      <footer className={styles.footer}>
        DEVCONF 2026 · Лабораторная работа № 19 · React, Vite, CSS Modules
      </footer>
    </div>
  );
}

export default App;
