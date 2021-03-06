import {
  SHOP_REQUEST,
  SHOP_SUCCESS,
  SHOP_FAILURE,
  SET_SHOP_DATA
} from '../constants/ActionTypes';

const initialState = {
  data: null,
  isFetching: false,
  lastUpdated: null,
  error: null,
};

export default function(state = initialState, action) {
  const { type, data, error } = action;

  switch (type) {
    case SHOP_REQUEST:
      return { ...state, isFetching: true };

    case SHOP_FAILURE:
      return { ...state, isFetching: false, error };

    case SHOP_SUCCESS:
      return { ...state, isFetching: false, data };

    case SET_SHOP_DATA:
      return { ...state, data };

    default:
      return state;
  }
}
