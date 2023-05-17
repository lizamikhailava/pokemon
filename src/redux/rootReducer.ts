import { combineReducers } from "redux";
import {
  errorReducer,
  loadingReducer,
  pokemonDetailsReducer,
  pokemonsReducer
} from "./reducers";

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemonDetails: pokemonDetailsReducer,
  api: combineReducers({
    error: errorReducer,
    loading: loadingReducer
  })
});