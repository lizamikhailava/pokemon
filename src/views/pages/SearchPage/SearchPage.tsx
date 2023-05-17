import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPokemon } from "../../../interfaces";
import { GET_ALL_POKEMONS_DATA_REQUEST } from "../../../redux/actions";
import { fullPokemonDataErrorSelector, fullPokemonDataLoadingSelector, fullPokemonDataSelector } from "../../../redux/selectors/fullPokemonDataSelector";
import { FullPageContainer } from "../../components/FullPageContainer/FullPageContainer";
import { Loader } from "../../components/Loader/Loader";
import { SearchSection } from "../../components/SearchSection/SearchSection";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(fullPokemonDataLoadingSelector);
  const error = useSelector(fullPokemonDataErrorSelector);
  const pokemonsData: IPokemon[] | null = useSelector(fullPokemonDataSelector);

  useEffect(() => {
    dispatch({
      type: GET_ALL_POKEMONS_DATA_REQUEST,
    });
  }, []);

  return (
    <FullPageContainer>
      <Loader component={<SearchSection pokemonsData={pokemonsData} />} data={pokemonsData} isLoading={isLoading} error={error} />
    </FullPageContainer>
  );
};