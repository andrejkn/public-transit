import {
  GEOPOSITION_PENDING,
  GEOPOSITION_SUCCESS,
  GEOPOSITION_ERROR,
} from '../constants';

export function getGeoposition() {
  return (dispatch) => {
    return dispatch({
      types: [
        GEOPOSITION_PENDING,
        GEOPOSITION_SUCCESS,
        GEOPOSITION_ERROR,
      ],
      payload: {
        promise: new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition((position) => {
            const {
              latitude,
              longitude,
            } = position.coords;

            resolve({
              longitude,
              latitude,
            });
          }, () => {
            reject('Cannot find the geoposition');
          });
        }),
      },
    });
  };
}
