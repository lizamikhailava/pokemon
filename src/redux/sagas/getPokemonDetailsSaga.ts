import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_POKEMON_DETAILS_ERROR,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_SUCCESS
} from "../actions";
import { getPokemonDetails } from "../../api/pokemonAPI";

function* workerGetPokemonDetails(action: {
  type: string;
  payload: string[];
}): Generator<any> {
  try {
    const details: any = yield call(getPokemonDetails, action.payload);
    yield put({
      type: GET_POKEMON_DETAILS_SUCCESS,
      payload: { [details.name]: details }
    });
  } catch (error: any) {
    yield put({
      type: GET_POKEMON_DETAILS_ERROR,
      payload: { message: error.message }
    });
  }
}

export function* watcherGetPokemonDetails() {
  yield takeLatest(GET_POKEMON_DETAILS_REQUEST, workerGetPokemonDetails);
}
