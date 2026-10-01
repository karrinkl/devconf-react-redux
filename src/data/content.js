/*
  Демонстрационные данные лендинга. Вынесены из разметки, чтобы
  компоненты получали их через props и оставались переиспользуемыми.
  Изображения подготовлены в ЛР № 17 и импортируются как модули:
  Vite подставит в сборку итоговые пути с хешем.
*/

import speaker01 from '../assets/images/speaker-01-1x.webp';
import speaker01Retina from '../assets/images/speaker-01-2x.webp';
import speaker02 from '../assets/images/speaker-02-1x.webp';
import speaker02Retina from '../assets/images/speaker-02-2x.webp';
import speaker03 from '../assets/images/speaker-03-1x.webp';
import speaker03Retina from '../assets/images/speaker-03-2x.webp';

export const speakers = [
  {
    id: 'kovalev',
    name: 'Алексей Ковалёв',
    role: 'Staff Engineer · EPAM',
    topic: 'Трекинг объектов в реальном времени: от YOLO до DeepSORT',
    photo: speaker01,
    photoRetina: speaker01Retina,
    date: '18 мая, 14:00',
    hall: 'Зал A',
  },
  {
    id: 'melnik',
    name: 'Дарья Мельник',
    role: 'Head of Design · Wargaming',
    topic: 'Дизайн-система без боли: что ломается на втором году',
    photo: speaker02,
    photoRetina: speaker02Retina,
    date: '18 мая, 15:30',
    hall: 'Зал B',
  },
  {
    id: 'savchuk',
    name: 'Игорь Савчук',
    role: 'SRE · iTechArt',
    topic: 'Наблюдаемость сервисов: метрики, которые правда нужны',
    photo: speaker03,
    photoRetina: speaker03Retina,
    date: '19 мая, 11:00',
    hall: 'Зал A',
  },
];

export const faqItems = [
  {
    id: 'stream',
    question: 'Нужен ли билет, чтобы смотреть онлайн-трансляцию?',
    answer:
      'Нет. Трансляция главного зала бесплатная, достаточно зарегистрироваться по e-mail. ' +
      'Билет нужен только для очного участия и доступа к воркшопам.',
    defaultOpen: true,
  },
  {
    id: 'refund',
    question: 'Можно ли вернуть билет?',
    answer:
      'Да, до 1 мая действует полный возврат. После этой даты билет можно перенести ' +
      'на следующий год или передать другому участнику.',
    defaultOpen: false,
  },
  {
    id: 'records',
    question: 'Будут ли записи докладов?',
    answer:
      'Записи появятся на сайте в течение двух недель после конференции ' +
      'и останутся в открытом доступе.',
    defaultOpen: false,
  },
];
