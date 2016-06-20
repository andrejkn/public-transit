import React from 'react';
import TransitRoute from './transit-route';

const RoutesList = ({ busPredictionsData }) => {
  const list = busPredictionsData.map((predictions, index) => {
    return (
      <TransitRoute
        key={ 'transit_routes_' + index }
        route={ predictions.get('route') }
        stop={ predictions.get('stop') }
        values={ predictions.get('values') }
      />
    );
  });
  return (
    <div>
      { list }
    </div>
  );
};

RoutesList.propTypes = {
  busPredictionsData: React.PropTypes.object,
};

export default RoutesList;
