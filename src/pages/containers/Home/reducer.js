import { OPTIONS, POST_LIST, SETTINGS } from './constants';

const initialState = {
  options: [],
  settings: {},
  postList: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPTIONS:
      return {
        ...state,
        options: action.payload,
      };
    case SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };
    case POST_LIST:
      return {
        ...state,
        postList: action.payload,
      };
    default:
      return state;
  }
};