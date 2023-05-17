import { combineReducers } from "redux";
import { errorReducer } from "./reducers/errorReducer";
import { loadingReducer } from "./reducers/loadingReducer";
import { modalReducer } from "./reducers/modalReducer";
import { pokemonDetailsReducer } from "./reducers/pokemonDetailsReducer";
import { pokemonsReducer } from "./reducers/pokemonsReducer";

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemonDetails: pokemonDetailsReducer,
  api: combineReducers({
    error: errorReducer,
    loading: loadingReducer
  }),
  modal: modalReducer,
});
