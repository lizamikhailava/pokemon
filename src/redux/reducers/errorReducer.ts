export const errorReducer = (
  state = {},
  action: {
    type: string;
    payload: { message?: string; code?: number };
  }
) => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|ERROR)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  let errorObj;
  if (requestState === "ERROR") {
    const errorMessage = payload.message || "";
    const errorCode = payload.code;
    errorObj = errorCode
      ? { message: errorMessage, code: errorCode }
      : errorMessage;
  }
  return {
    ...state,
    [requestName]: errorObj
  };
};
