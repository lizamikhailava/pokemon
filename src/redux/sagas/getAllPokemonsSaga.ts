import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ALL_POKEMONS_DATA_ERROR,
  GET_ALL_POKEMONS_DATA_REQUEST,
  GET_ALL_POKEMONS_DATA_SUCCESS,
} from "../actions";
import { getAllPokemonData } from "../../api/pokemonAPI";
import { IError, IPokemon } from "../../interfaces";

function* workerGetAllPokemonsData() {
  try {
    const data: IPokemon[] = yield call(getAllPokemonData);
    yield put({
      type: GET_ALL_POKEMONS_DATA_SUCCESS,
      payload: { pokemons: data } 
    });
  } catch (error) {
    const typedError = error as IError;
    yield put({
      type: GET_ALL_POKEMONS_DATA_ERROR,
      payload: { message: typedError.message }
    });
  }
}

export function* watcherGetAllPokemonsData() {
  yield takeLatest(GET_ALL_POKEMONS_DATA_REQUEST, workerGetAllPokemonsData);
}