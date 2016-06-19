import { busPredictions } from '../api/bus-predictions';

import {
  BUS_PREDICTIONS_PENDING,
  BUS_PREDICTIONS_SUCCESS,
  BUS_PREDICTIONS_ERROR,
} from '../constants';

export function getBusPredictions() {
  return (dispatch, getState ) => {
    const { longitude, latitude } = getState()
      .geoposition
      .get('coordinates').toJS();

    return dispatch({
      types: [
        BUS_PREDICTIONS_PENDING,
        BUS_PREDICTIONS_SUCCESS,
        BUS_PREDICTIONS_ERROR,
      ],
      payload: {
        promise: busPredictions(longitude, latitude),
      },
    });
  };
}
