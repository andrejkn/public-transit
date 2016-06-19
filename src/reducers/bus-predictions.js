import {
  BUS_PREDICTIONS_PENDING,
  BUS_PREDICTIONS_SUCCESS,
  BUS_PREDICTIONS_ERROR,
} from '../constants';

import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  busPredictionsData: [],
});

function busPredictionsReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case BUS_PREDICTIONS_PENDING:
    return state.merge(fromJS({
      busPredictionsData: [],
      hasError: false,
      isLoading: true,
    }));

  case BUS_PREDICTIONS_SUCCESS:
    return state.merge(fromJS({
      busPredictionsData: action.payload,
      hasError: false,
      isLoading: false,
    }));

  case BUS_PREDICTIONS_ERROR:
    return state.merge(fromJS({
      hasError: true,
      isLoading: false,
    }));

  default:
    return state;
  }
}

export default busPredictionsReducer;
