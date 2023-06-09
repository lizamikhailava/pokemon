import { IRootState } from "../../interfaces";
import { GET_POKEMON_DETAILS } from "../actions";
import { createErrorSelector, createLoadingSelector } from "../reduxUtils";

export const pokemonDetailsSelector = (state: IRootState) => state.pokemonDetails?.pokemonDetails;

export const pokemonDetailsLoadingSelector = createLoadingSelector([GET_POKEMON_DETAILS]);
export const pokemonDetailsErrorSelector = createErrorSelector([GET_POKEMON_DETAILS]);