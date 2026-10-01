import { createSlice } from '@reduxjs/toolkit';

/**
 * Срез состояния «Избранные спикеры».
 *
 * В хранилище лежат только идентификаторы: сами данные спикеров
 * остаются в модуле src/data/content.js и не дублируются.
 * Такое разделение не даёт двум источникам истины разойтись.
 */
const favoritesSlice = createSlice({
  name: 'favorites',

  initialState: {
    ids: [],
  },

  reducers: {
    /**
     * Добавляет спикера в избранное или убирает его оттуда.
     * Благодаря Immer внутри Redux Toolkit состояние можно
     * изменять напрямую: библиотека соберёт новый неизменяемый объект.
     */
    toggleFavorite(state, action) {
      const id = action.payload;
      const index = state.ids.indexOf(id);

      if (index === -1) {
        state.ids.push(id);
      } else {
        state.ids.splice(index, 1);
      }
    },

    /** Очищает список избранного целиком. */
    clearFavorites(state) {
      state.ids = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;

/* Селекторы. Компоненты обращаются к хранилищу только через них,
   поэтому форму state можно менять, не трогая разметку. */
export const selectFavoriteIds = (state) => state.favorites.ids;
export const selectFavoritesCount = (state) => state.favorites.ids.length;
export const selectIsFavorite = (id) => (state) => state.favorites.ids.includes(id);

export default favoritesSlice.reducer;
