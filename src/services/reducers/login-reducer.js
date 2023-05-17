import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED } from "../actions/login";

//Все ингредиенты от запроса API
const initialState = {
  user: [],
  userError: false,
  userLoading: true,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return { ...state, userLoading: true };
    }
    case GET_USER_SUCCESS: {
      return { ...state, userError: false, user: action.user, userLoading: false };
    }
    case GET_USER_FAILED: {
      return { ...state, userError: true, userLoading: false };
    }
    default: {
      return state;
    }
  }
};