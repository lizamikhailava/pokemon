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
  pokemonsData: IPokemon[];
}

export interface IPokemonList {
  pokemonNames: string[];
}

export interface IPokemon {
  name: string;
  base_experience: number;
  height: number;
  order: number;
  weight: number;
  species: { name: string };
  sprites: { front_default: string };
}

export interface IModalData {
  pokemonDetails: IPokemon;
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
  payload: any;
}
