// eslint-disable-next-line
export const createLoadingSelector = (actions: string[]) => (state: any) =>
  actions.some((action: string) => state.api.loading[action]);

export const createErrorSelector = (actions: string[]) => (state: {
  api: { error: Record<string, { message: string }> };
}) => {
  const errorObj =
    state.api.error[actions.find((action: string) => state.api.error[action]) || ""];
  return typeof errorObj === "object" ? errorObj.message || "" : errorObj || "";
};

// eslint-disable-next-line
export const updateState = (state: object, payload: Record<string, any>) => {
  return {
    ...state,
    ...payload
  };
};
