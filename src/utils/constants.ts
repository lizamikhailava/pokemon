export const MINIMUM_NUMBER_OF_SYMBOLS = 3;

export const ZERO = 0;

export const API_CASH_LIMIT = 100000;

export const API_TIMEOUT = 10000;

export enum Paths {
  HOME = "/",
  SEARCH = "/search",
  ERROR = "*"
}

export const menuItems = [
  {
    id: "home",
    label: "Home",
    url: Paths.HOME,
  },
  {
    id: "search",
    label: "Search",
    url: Paths.SEARCH,
  },
];