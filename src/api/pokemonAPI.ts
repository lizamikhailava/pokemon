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

// I picked pokedex-promise-v2 as a fast solution with built-in caching.
// The alternative to this solution would be to use Axios

const P = new Pokedex(options);

export async function getAllPokemonData() {
  const response = await P.getPokemonsList();
  return response.results;
}

export async function getPokemonDetails(names: string[]) {
  const response = await P.getPokemonByName(names);
  return response;
}