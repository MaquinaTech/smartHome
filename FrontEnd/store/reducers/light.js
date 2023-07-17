import {
  FETCH_LIGHTS_REQUEST,
  FETCH_LIGHTS_SUCCESS,
  FETCH_LIGHTS_FAILURE,
} from './lightsActions';

const initialState = {
  lightsData: null,
  loading: false,
  error: null,
};

const lightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIGHTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LIGHTS_SUCCESS:
      return {
        ...state,
        loading: false,
        lightsData: action.payload,
      };
    case FETCH_LIGHTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default lightsReducer;
