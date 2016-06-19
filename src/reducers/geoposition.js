import {
  GEOPOSITION_PENDING,
  GEOPOSITION_SUCCESS,
  GEOPOSITION_ERROR,
} from '../constants';

import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  coordinates: {},
});

function geopositionReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case GEOPOSITION_PENDING:
    return state.merge(fromJS({
      hasError: false,
      isLoading: true,
    }));

  case GEOPOSITION_SUCCESS:
    return state.merge(fromJS({
      coordinates: action.payload,
      hasError: false,
      isLoading: false,
    }));

  case GEOPOSITION_ERROR:
    return state.merge(fromJS({
      hasError: true,
      isLoading: false,
    }));

  default:
    return state;
  }
}

export default geopositionReducer;
