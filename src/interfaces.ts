export interface IFullPageContainer {
  children: JSX.Element;
  pageClassName?: string;
}

export interface ILoader {
  component: JSX.Element;
  data: any;
  error: string;
  isLoading: boolean;
}

export interface ISearchSection {
  pokemonsData: IPokemon[] | null;
}

export interface IPokemonList {
  pokemonNames: string[];
}

export interface IPokemon {
  abilities: { ability: { name: string }, is_hidden: boolean }[];
  name: string;
  base_experience: number;
  forms: { name: string }[];
  height: number;
  order: number;
  weight: number;
  is_default: boolean;
  species: { name: string };
  sprites: { front_default: string };
}

export interface IModalData {
  handleClose: () => void;
  pokemonDetails: IPokemon | null;
  open: boolean;
}

export interface IOptions {
  protocol: "https" | "http" | undefined;
  hostName: string;
  versionPath: string;
  cacheLimit: number;
  timeout: number;
}

export interface IReduxAction {
  type: string;
  payload: Record<string, any>;
}

export interface IError {
  message: string;
  code: number
}

export interface IRootState {
  pokemons: { pokemons: IPokemon[] | null };
  pokemonDetails: { pokemonDetails: IPokemon[] | null };
  api: {
    error: Record<string, IError>,
    loading: Record<string, boolean>,
  }
}