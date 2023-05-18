import Pokedex from "pokedex-promise-v2";
import { IOptions } from "../interfaces";
import { API_CASH_LIMIT, API_TIMEOUT } from "../utils/api";

const options: IOptions = {
  protocol: "https",
  hostName: "pokeapi.co",
  versionPath: "/api/v2/",
  cacheLimit: API_CASH_LIMIT,
  timeout: API_TIMEOUT
};

const P = new Pokedex(options);

export async function getAllPokemonData() {
  const response = await P.getPokemonsList();
  return response.results;
}

export async function getPokemonDetails(names: string[]) {
  const response = await P.getPokemonByName(names);
  return response;
}

// I decided to use pokedex-promise-v2 as a fast solution with built-in caching
// But api requests could be also performed using axios.
// It would look like this:

// import axios from "axios";
// axios.defaults.baseURL = "https:/pokeapi.co/api/v2/"
// export const apiInstance = axios.create({});

// ...
// const url = ...
// const response = await apiInstance.get(url);