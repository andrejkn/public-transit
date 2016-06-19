import React from 'react';
import { connect } from 'react-redux';
import * as BusPredictionsActions from '../actions/busPredictions';
import * as GeopositionAction from '../actions/geoposition';

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
  }

  componentWillReceiveProps(nextProps) {
    const newGeoposition = nextProps.geoposition;
    const newCoordinates = newGeoposition.get('coordinates', {});
    const currGeoposition = this.props.geoposition;
    const currCoordinates = currGeoposition.get('coordinates', {});

    if (!newCoordinates.isEmpty() && !newCoordinates.equals(currCoordinates)) {
      nextProps.getBusPredictions();
    }
  }

  render() {
    const { props } = this;
    const busRoutes = props.busPredictions.get('busPredictionsData').map((pred, index) => {
      const routeID = pred.get('route').get('id');
      const stopTitle = pred.get('stop').get('title');
      return (
        <div key={ index }>
          { routeID }
          <br />
          { stopTitle }
          <hr />
        </div>
      );
    });
    return (
      <div>
        { busRoutes }
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
