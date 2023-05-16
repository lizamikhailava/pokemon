export const createLoadingSelector = (actions: any) => (state: any) =>
  actions.some((action: string) => state.api.loading[action]);

export const createErrorSelector = (actions: any) => (state: {
  api: { error: any };
}) => {
  const errorObj =
    state.api.error[actions.find((action: string) => state.api.error[action])];
  return typeof errorObj === "object" ? errorObj.message || "" : errorObj || "";
};

export const updateState = (state: object, payload: any) => {
  return {
    ...state,
    ...payload
  };
};
