import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_POKEMON_DETAILS_ERROR,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_SUCCESS
} from "../actions";
import { getPokemonDetails } from "../../api/pokemonAPI";
import { IError, IPokemon } from "../../interfaces";

function* workerGetPokemonDetails(action: {
  type: string;
  payload: string[];
}) {
  try {
    const details: IPokemon[] = yield call(getPokemonDetails, action.payload);
    yield put({
      type: GET_POKEMON_DETAILS_SUCCESS,
      payload: { pokemonDetails: details }
    });
  } catch (error) {
    const typedError = error as IError;
    yield put({
      type: GET_POKEMON_DETAILS_ERROR,
      payload: { message: typedError.message }
    });
  }
}

export function* watcherGetPokemonDetails() {
  yield takeLatest(GET_POKEMON_DETAILS_REQUEST, workerGetPokemonDetails);
}
