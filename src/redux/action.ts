export const SET_MODAL = "SET_MODAL";
export const SET_AI_RESPONSE = "SET_AI_RESPONSE";

export const setModal = (isOpen: boolean) => {
  return {
    type: SET_MODAL,
    payload: isOpen,
  };
};

export const setAiResponse = (response: string) => ({
  type: SET_AI_RESPONSE,
  payload: response,
});
