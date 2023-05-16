import { useEffect, useMemo, useState } from "react";
import { TextField } from "@mui/material";
import classes from "./SearchSection.module.scss";
import { PokemonList } from "../PokemonList/PokemonList";
import { MINIMUM_NUMBER_OF_SYMBOLS } from "../../../utils/constants";

export const SearchSection = ({ pokemonsData }: any) => {
  const worker: Worker = useMemo(
    () =>
      new window.Worker(
        new URL("../../../workers/searchPokemon.worker.ts", import.meta.url)
      ),
    []
  );
  const [searchText, setSearchText] = useState<string>("");
  const [foundPokemons, setFoundPokemons] = useState<string[] | undefined>();

  useEffect(() => {
    if (searchText.length >= MINIMUM_NUMBER_OF_SYMBOLS) {
      console.log("I work now");
      worker.terminate();
      worker.postMessage({ data: pokemonsData, searchText });
      worker.onerror = err => err;
      worker.onmessage = e => {
        const { foundPokemonNames } = e.data;
        setFoundPokemons(foundPokemonNames);
      };
    }
    // eslint-disable-next-line
  }, [searchText]);

  useEffect(() => {
    return () => {
      worker.terminate();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <TextField
        className={classes.searchField}
        onChange={event => setSearchText(event.target.value)}
        placeholder="Type 3 or more symbols"
        value={searchText}
      />
      {foundPokemons && <PokemonList pokemonNames={foundPokemons} />}
    </section>
  );
};
