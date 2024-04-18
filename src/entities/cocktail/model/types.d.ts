type StringOrNull = string | null;

export interface ICocktailModel {
  activeCocktail: string;
  cocktails: ICocktail[];
  deleted: string[];
}

interface ICocktail {
  idDrink: StringOrNull;
  strDrink: StringOrNull;
  strDrinkAlternate: StringOrNull;
  strTags: StringOrNull;
  strVideo: StringOrNull;
  strCategory: StringOrNull;
  strIBA: StringOrNull;
  strAlcoholic: StringOrNull;
  strGlass: StringOrNull;
  strInstructions: StringOrNull;
  strInstructionsES: StringOrNull;
  strInstructionsDE: StringOrNull;
  strInstructionsFR: StringOrNull;
  strInstructionsIT: StringOrNull;
  'strInstructionsZH-HANS': StringOrNull;
  'strInstructionsZH-HANT': StringOrNull;
  strDrinkThumb: StringOrNull;
  strIngredient1: StringOrNull;
  strIngredient2: StringOrNull;
  strIngredient3: StringOrNull;
  strIngredient4: StringOrNull;
  strIngredient5: StringOrNull;
  strIngredient6: StringOrNull;
  strIngredient7: StringOrNull;
  strIngredient8: StringOrNull;
  strIngredient9: StringOrNull;
  strIngredient10: StringOrNull;
  strIngredient11: StringOrNull;
  strIngredient12: StringOrNull;
  strIngredient13: StringOrNull;
  strIngredient14: StringOrNull;
  strIngredient15: StringOrNull;
  strMeasure1: StringOrNull;
  strMeasure2: StringOrNull;
  strMeasure3: StringOrNull;
  strMeasure4: StringOrNull;
  strMeasure5: StringOrNull;
  strMeasure6: StringOrNull;
  strMeasure7: StringOrNull;
  strMeasure8: StringOrNull;
  strMeasure9: StringOrNull;
  strMeasure10: StringOrNull;
  strMeasure11: StringOrNull;
  strMeasure12: StringOrNull;
  strMeasure13: StringOrNull;
  strMeasure14: StringOrNull;
  strMeasure15: StringOrNull;
  strImageSource: StringOrNull;
  strImageAttribution: StringOrNull;
  strCreativeCommonsConfirmed: StringOrNull;
  dateModified: StringOrNull;
}

export { type ICocktail };
