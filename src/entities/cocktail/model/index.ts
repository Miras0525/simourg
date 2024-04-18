import { defineStore } from 'pinia';
import {
  CocktailApi,
  COCKTAILS_STORAGE_NAME,
  DELETED_STORAGE_NAME,
} from '../index';
import type { ICocktailModel, ICocktail } from './types';

export const useCocktailModel = defineStore({
  id: 'cocktail',

  state: () =>
    <ICocktailModel>{
      activeCocktail: '',
      cocktails: JSON.parse(
        localStorage.getItem(COCKTAILS_STORAGE_NAME) || '[]',
      ),
      deleted: JSON.parse(localStorage.getItem(DELETED_STORAGE_NAME) || '[]'),
    },

  actions: {
    async fetchCocktails(payload: string): Promise<void> {
      let drinksList = [];
      const cocktailsStorage = JSON.parse(
        localStorage.getItem(COCKTAILS_STORAGE_NAME) || '{}',
      );
      this.setActiveCocktail(payload);

      if (cocktailsStorage[this.activeCocktail]) {
        drinksList = cocktailsStorage[this.activeCocktail];
      } else {
        const { drinks } = await CocktailApi.fetchCocktails(
          this.activeCocktail,
        );
        localStorage.setItem(
          COCKTAILS_STORAGE_NAME,
          JSON.stringify({
            ...cocktailsStorage,
            [this.activeCocktail]: drinks,
          }),
        );
        drinksList = drinks;
      }

      if (drinksList?.length) {
        this.updateQueryCocktails(drinksList);
      }
    },

    updateQueryCocktails(payload: ICocktail[]): void {
      this.cocktails = [...payload] || [];
    },

    setDeleted(payload: string[]): void {
      this.deleted = [...payload] || [];
    },

    setActiveCocktail(payload: string): void {
      this.activeCocktail = payload;
    },
  },
});
