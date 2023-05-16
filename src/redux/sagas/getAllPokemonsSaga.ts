import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ALL_POKEMONS_DATA_ERROR,
  GET_ALL_POKEMONS_DATA_REQUEST,
  GET_ALL_POKEMONS_DATA_SUCCESS,
} from "../actions";
import { getAllPokemonData } from "../../api/pokemonAPI";

function* workerGetAllPokemonsData(): Generator<any> {
  try {
    const data: any = yield call(getAllPokemonData);
    yield put({
      type: GET_ALL_POKEMONS_DATA_SUCCESS,
      payload: { pokemons: data } 
    });
  } catch (error: any) {
    yield put({
      type: GET_ALL_POKEMONS_DATA_ERROR,
      payload: { message: error.message }
    });
  }
}

export function* watcherGetAllPokemonsData() {
  yield takeLatest(GET_ALL_POKEMONS_DATA_REQUEST, workerGetAllPokemonsData);
}