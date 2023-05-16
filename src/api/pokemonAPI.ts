import Pokedex from "pokedex-promise-v2";
import { IOptions } from "../interfaces";

const options: IOptions = {
  protocol: "https",
  hostName: "pokeapi.co",
  versionPath: "/api/v2/",
  cacheLimit: 100 * 1000,
  timeout: 10 * 1000
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
