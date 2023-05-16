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

export interface IPokemonList {
  pokemonNames: string[];
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
