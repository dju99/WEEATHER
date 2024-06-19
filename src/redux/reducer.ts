import { SET_AI_RESPONSE, SET_MODAL } from "./action";

type ActionTypes = typeof SET_MODAL | typeof SET_AI_RESPONSE;

interface ActionPayload {
  type: ActionTypes;
  payload?: any;
}

export type RootState = {
  isModalOpen: boolean;
  aiResponse: string[]; // Change aiResponse type to string array
};

const initialState: RootState = {
  isModalOpen: false,
  aiResponse: [], // Initialize aiResponse as an empty array
};

const rootReducer = (state = initialState, action: ActionPayload): RootState => {
  switch (action.type) {
    case SET_MODAL:
      return { ...state, isModalOpen: action.payload };
    case SET_AI_RESPONSE:
      return {
        ...state,
        aiResponse: [...state.aiResponse, action.payload], 
      };
    default:
      return state;
  }
};

export default rootReducer;
