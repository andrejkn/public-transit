import { get } from './fetchr';

const URL = 'http://restbus.info/api/locations/';

export function busPredictions(longitude, latitude) {
  return get(`${ URL }${ latitude },${ longitude }/predictions`);
}
