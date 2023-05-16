import { IReduxAction } from "../../interfaces";
import { updateState } from "../reduxUtils";
import { GET_POKEMON_DETAILS_SUCCESS } from "../actions";

const initialState = {};

export const pokemonDetailsReducer = (
  state = initialState,
  { type, payload }: IReduxAction
) => {
  switch (type) {
    case GET_POKEMON_DETAILS_SUCCESS: {
      return updateState(state, payload);
    }
    default: {
      return state;
    }
  }
};
