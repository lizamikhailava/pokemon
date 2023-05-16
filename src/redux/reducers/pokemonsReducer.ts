import { IReduxAction } from "../../interfaces";
import { updateState } from "../reduxUtils";
import { GET_ALL_POKEMONS_DATA_SUCCESS } from "../actions";

const initialState = {
  pokemons: null
};

export const pokemonsReducer = (
  state = initialState,
  { type, payload }: IReduxAction
) => {
  switch (type) {
    case GET_ALL_POKEMONS_DATA_SUCCESS: {
      return updateState(state, payload);
    }
    default: {
      return state;
    }
  }
};
