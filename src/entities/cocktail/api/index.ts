import { http } from '@/shared/api';

export const fetchCocktails = async (query: string) => {
  return (await http.get(`1/search.php?s=${query}`)).data;
};
