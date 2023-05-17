import { GET_ALL_POKEMONS_DATA } from "../actions";
import { createErrorSelector, createLoadingSelector } from "../reduxUtils";

export const fullPokemonDataSelector = (state: any) => state.pokemons?.pokemons;

export const fullPokemonDataLoadingSelector = createLoadingSelector([GET_ALL_POKEMONS_DATA]);
export const fullPokemonDataErrorSelector = createErrorSelector([GET_ALL_POKEMONS_DATA]);