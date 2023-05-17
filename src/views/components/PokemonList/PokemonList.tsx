import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./PokemonList.module.scss";
import { IPokemon, IPokemonList } from "../../../interfaces";
import { GET_POKEMON_DETAILS_REQUEST, SHOW_POKEMON_DETAILS } from "../../../redux/actions";
import {
  pokemonDetailsErrorSelector,
  pokemonDetailsLoadingSelector,
  pokemonDetailsSelector
} from "../../../redux/selectors/pokemonDetailsSelector";
import { Loader } from "../Loader/Loader";

export const PokemonList = ({ pokemonNames }: IPokemonList) => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(pokemonDetailsSelector);
  const isLoading = useSelector(pokemonDetailsLoadingSelector);
  const error = useSelector(pokemonDetailsErrorSelector);

  useEffect(() => {
    dispatch({
      type: GET_POKEMON_DETAILS_REQUEST,
      payload: pokemonNames
    });
    // eslint-disable-next-line
  }, [pokemonNames]);

  const showPokemonDetails = (pokemonDetails: IPokemon) => {
    dispatch({
      type: SHOW_POKEMON_DETAILS,
      payload: { pokemonDetails, open: true}
    });
  };

  const List = () => (
    <ul className={classes.pokemonList}>
      {pokemonList.map((pokemon: IPokemon, index: number) => {
        return (
          <li
            key={`${pokemon?.name}_${index}`}
            onClick={() => showPokemonDetails(pokemon)}
          >
            <img alt={pokemon?.name} src={pokemon?.sprites?.front_default} /><span>{pokemon?.name}</span>
          </li>
        );
      })}
    </ul>
  );

  return <section>
    <Loader component={<List />} data={pokemonList} isLoading={isLoading} error={error} />
  </section>;
};
