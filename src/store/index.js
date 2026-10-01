import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from './favoritesSlice';

/**
 * Корневое хранилище приложения.
 *
 * configureStore сам подключает Redux DevTools и набор стандартных
 * промежуточных обработчиков, в том числе проверку на случайное
 * изменение состояния и на несериализуемые значения в действиях.
 */
export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;
