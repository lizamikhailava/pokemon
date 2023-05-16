import { GET_POKEMON_DETAILS } from "../actions";
import { createErrorSelector, createLoadingSelector } from "../reduxUtils";

export const pokemonDetailsSelector = (names: string[]) => (state: any) => {
  return names.map((name: string) => {
    return state.pokemonDetails?.[name];
  });
}

export const pokemonDetailsLoadingSelector = createLoadingSelector([GET_POKEMON_DETAILS]);
export const pokemonDetailsErrorSelector = createErrorSelector([GET_POKEMON_DETAILS]);