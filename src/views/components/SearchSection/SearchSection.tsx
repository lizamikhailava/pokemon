import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import classes from "./SearchSection.module.scss";
import { PokemonList } from "../PokemonList/PokemonList";
import { MINIMUM_NUMBER_OF_SYMBOLS } from "../../../utils/constants";
import { IPokemon, ISearchSection } from "../../../interfaces";

export const SearchSection = ({ pokemonsData }: ISearchSection) => {
  const [searchText, setSearchText] = useState<string>("");
  const [foundPokemons, setFoundPokemons] = useState<string[] | undefined>();

  function contains(data: IPokemon[], searchText: string) {
    const results = data.filter((item: IPokemon) => item.name.startsWith(searchText));
    return results.map((item: IPokemon) => item?.name);
  }

  useEffect(() => {
    if (searchText.length >= MINIMUM_NUMBER_OF_SYMBOLS) {
      const foundPokemonNames = contains(pokemonsData, searchText);
      setFoundPokemons(foundPokemonNames);
    }
    // eslint-disable-next-line
  }, [searchText]);

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
