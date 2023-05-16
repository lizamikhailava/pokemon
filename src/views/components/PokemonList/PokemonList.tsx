import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPokemonList } from "../../../interfaces";
import { GET_POKEMON_DETAILS_REQUEST, SHOW_POKEMON_DETAILS } from "../../../redux/actions";
import {
  pokemonDetailsErrorSelector,
  pokemonDetailsLoadingSelector,
  pokemonDetailsSelector
} from "../../../redux/selectors/pokemonDetailsSelector";
import { Loader } from "../Loader/Loader";

export const PokemonList = ({ pokemonNames }: IPokemonList) => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(pokemonDetailsSelector(pokemonNames));
  const isLoading = useSelector(pokemonDetailsLoadingSelector);
  const error = useSelector(pokemonDetailsErrorSelector);

  useEffect(() => {
    dispatch({
      type: GET_POKEMON_DETAILS_REQUEST,
      payload: pokemonNames
    });
  }, []);

  const showPokemonDetails = (pokemonDetails: any) => {
    dispatch({
      type: SHOW_POKEMON_DETAILS,
      payload: pokemonDetails
    });
  };

  const List = () => (
    <ul>
      {pokemonList.map((pokemon, index) => {
        return (
          <li
            key={`${pokemon?.name}_${index}`}
            onClick={() => showPokemonDetails(pokemon)}
          >
            {pokemon}
          </li>
        );
      })}
    </ul>
  );

  return <section>
    <Loader component={<List />} data={pokemonList} isLoading={isLoading} error={error} />
  </section>;
};
