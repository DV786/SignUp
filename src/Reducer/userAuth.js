import {
  FANSIGNUP_SUCCESS,
  FANSIGNUP_FALL,
  TALENTSIGNUP_SUCCESS,
  TALENTSIGNUP_FALL,
  SIGNUP,
} from "../Action/action-type";

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function foo(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FANSIGNUP_SUCCESS:
    case TALENTSIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case FANSIGNUP_FALL:
    case TALENTSIGNUP_FALL:
    case SIGNUP:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}
