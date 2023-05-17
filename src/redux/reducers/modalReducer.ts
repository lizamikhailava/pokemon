import { IReduxAction } from "../../interfaces";
import { updateState } from "../reduxUtils";
import { CLOSE_POPUP, SHOW_POKEMON_DETAILS } from "../actions";

const initialState = {
  pokemonDetails: {},
  open: false
};

export const modalReducer = (
  state = initialState,
  { type, payload }: IReduxAction
) => {
  switch (type) {
    case SHOW_POKEMON_DETAILS: {
      return updateState(state, payload);
    }
    case CLOSE_POPUP: {
      return updateState(state, initialState)
    }
    default: {
      return state;
    }
  }
};