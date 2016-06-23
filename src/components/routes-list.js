import React from 'react';
import TransitRoute from './transit-route';

const RoutesList = ({ busPredictionsData }) => {
  const list = busPredictionsData.map((predictions, index) => {
    const trStyle = {
      backgroundColor: (index % 2 === 0) ? '#e9ffec' : 'f9f8d2',
    };

    return (
      <TransitRoute
        style={ trStyle }
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
