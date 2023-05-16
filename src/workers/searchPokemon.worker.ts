function contains(data: any, searchText: string) {
  const results = data.filter((item: any) => item.name.startsWith(searchText));
  return results.map((item: any) => item.name);
}

window.self.onmessage = (e: MessageEvent) => {
  const { data, searchText } = e.data;
  const foundPokemons = contains(data, searchText);
  window.self.postMessage({ foundPokemonNames: foundPokemons });
};

export {};