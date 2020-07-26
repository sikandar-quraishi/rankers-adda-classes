import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {
    name: "Mahip Kaushal",
    avatar: "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
  },
  toast: {
    show: false,
    variant: null,
    message: ""
  },
  examData: null,
  examState: 0,
  currentQuestion: 0
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case actionTypes.SHOW_TOAST:
      return {
        ...state,
        toast: {
          show: true,
          message: action.payload.message,
          variant: action.payload.variant
        }
      };
    case actionTypes.HIDE_TOAST:
      return {
        ...state,
        toast: {
          show: false,
          message: "",
          variant: null
        }
      };
    case actionTypes.SET_EXAM_DATA:
      return {
        ...state,
        examData: action.payload
      };
    case actionTypes.UNSET_EXAM_DATA:
      return {
        ...state,
        examData: null
      };
    case actionTypes.SET_EXAM_STATE:
      return {
        ...state,
        examState: action.payload
      };
    case actionTypes.SET_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload
      }
    default:
      return state;
  }
};

export default questionReducer;