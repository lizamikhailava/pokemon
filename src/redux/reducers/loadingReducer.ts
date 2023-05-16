export const loadingReducer = (state = {}, action: { type: string }) => {
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|ERROR)/.exec(type);
  
    if (!matches) return state;
  
    const [, requestName, requestState] = matches;
    return {
      ...state,
      [requestName]: requestState === "REQUEST"
    };
  };  