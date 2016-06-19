import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import busPredictions from './bus-predictions';
import geoposition from './geoposition';

const rootReducer = combineReducers({
  busPredictions,
  geoposition,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
