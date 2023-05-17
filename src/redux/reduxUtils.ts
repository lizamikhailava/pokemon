export const createLoadingSelector = (actions: string[]) => (state: any) =>
  actions.some((action: string) => state.api.loading[action]);

export const createErrorSelector = (actions: string[]) => (state: {
  api: { error: any };
}) => {
  const errorObj =
    state.api.error[actions.find((action: string) => state.api.error[action]) || ""];
  return typeof errorObj === "object" ? errorObj.message || "" : errorObj || "";
};

export const updateState = (state: object, payload: Record<string, any>) => {
  return {
    ...state,
    ...payload
  };
};
