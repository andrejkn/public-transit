import React from 'react';
import { connect } from 'react-redux';
import * as BusPredictionsActions from '../actions/busPredictions';
import * as GeopositionAction from '../actions/geoposition';
import RoutesList from '../components/routes-list';
import { arePositionsClose } from '../utils/geoposition';

function mapStateToProps(state) {
  return {
    busPredictions: state.busPredictions,
    geoposition: state.geoposition,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBusPredictions: (longitude, latitude) =>
      dispatch(BusPredictionsActions.getBusPredictions(longitude, latitude)),
    getGeoposition: () => dispatch(GeopositionAction.getGeoposition()),
  };
}

class App extends React.Component {
  componentDidMount() {
    const { props } = this;
    props.getGeoposition();
    setInterval(() => {
      props.getGeoposition();
      props.getBusPredictions();
    }, 5000);
  }

  componentWillReceiveProps(nextProps) {
    const newGeoposition = nextProps.geoposition;
    const newCoordinates = newGeoposition.get('coordinates', {});
    const currGeoposition = this.props.geoposition;
    const currCoordinates = currGeoposition.get('coordinates', {});

    if (!newCoordinates.isEmpty() &&
      !arePositionsClose(newCoordinates.toJS(), currCoordinates.toJS())) {
      // nextProps.getBusPredictions();
    } else {
      // initiate locating spinner
    }
  }

  render() {
    const { props } = this;
    return (
      <div>
        <RoutesList
          busPredictionsData={
            props.busPredictions.get('busPredictionsData')
          }
        />
        { props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  busPredictions: React.PropTypes.object,
  geoposition: React.PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
