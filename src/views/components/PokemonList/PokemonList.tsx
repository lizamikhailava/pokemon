import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./PokemonList.module.scss";
import { IPokemon, IPokemonList } from "../../../interfaces";
import { GET_POKEMON_DETAILS_REQUEST } from "../../../redux/actions";
import {
  pokemonDetailsErrorSelector,
  pokemonDetailsLoadingSelector,
  pokemonDetailsSelector,
} from "../../../redux/selectors/pokemonDetailsSelector";
import { RequestStateManager } from "../RequestStateManager/RequestStateManager";
import { PokemonDetailsPopup } from "../PokemonDetailsPopup/PokemonDetailsPopup";

export const PokemonList = ({ pokemonNames }: IPokemonList) => {
  const dispatch = useDispatch();
  const [modalData, setModalData] = useState<{
    open: boolean;
    pokemonDetails: IPokemon | null;
  }>({ open: false, pokemonDetails: null });
  const pokemonList = useSelector(pokemonDetailsSelector);
  const isLoading = useSelector(pokemonDetailsLoadingSelector);
  const error = useSelector(pokemonDetailsErrorSelector);

  useEffect(() => {
    dispatch({
      type: GET_POKEMON_DETAILS_REQUEST,
      payload: pokemonNames,
    });
    // eslint-disable-next-line
  }, [pokemonNames]);

  const showPokemonDetails = (pokemonDetails: IPokemon) => {
    setModalData({ open: true, pokemonDetails });
  };

  const closePopup = () => {
    setModalData({ open: false, pokemonDetails: null });
  };

  const List = () => (
    <ul className={classes.pokemonList}>
      {pokemonList?.map((pokemon: IPokemon, index: number) => {
        return (
          <li key={`${pokemon?.name}_${index}`} onClick={() => showPokemonDetails(pokemon)}>
            <img alt={pokemon?.name} src={pokemon?.sprites?.front_default} />
            <span>{pokemon?.name}</span>
            <span>Exp: {pokemon?.base_experience}</span>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section>
      <RequestStateManager component={<List />} data={pokemonList} isLoading={isLoading} error={error} />
      <PokemonDetailsPopup {...modalData} handleClose={closePopup} />
    </section>
  );
};
