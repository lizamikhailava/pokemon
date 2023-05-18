import { API_CASH_LIMIT } from "../utils/api";
import { axiosInstance } from "./axiosConfig";

export async function getAllPokemonData() {
  const url = `/pokemon?limit=${API_CASH_LIMIT}&offset=0`;
  const response = await axiosInstance.get(url);
  return response?.data?.results;
}

export async function getPokemonDetails(name: string) {
  const url = `/pokemon/${name}`;
  const response = await axiosInstance.get(url);
  return response?.data;
}

// This was an alternative variant which worked perfectly until the API was changed

// import Pokedex from "pokedex-promise-v2";
// import { IOptions } from "../interfaces";

// const options: IOptions = {
//   protocol: "https",
//   hostName: "pokeapi.co",
//   versionPath: "/api/v2/",
//   cacheLimit: API_CASH_LIMIT,
//   timeout: API_TIMEOUT
// };

// const P = new Pokedex(options);

// export async function getAllPokemonData() {
//   const response = await P.getPokemonsList();
//   return response.results;
// }

// export async function getPokemonDetails(names: string[]) {
//   const response = await P.getPokemonByName(names);
//   return response;
// }