import React from 'react';
import ArrivalTimes from './arrival-times';

const TransitRoute = ({
  route,
  stop,
  values,
  style,
}) => {
  const routeID = route.get('id');
  const stopTitle = stop.get('title');

  return (
    <div style={ Object.assign({}, styles.grid, style) }>
      <div style={ styles.routeID }>
        { routeID }
      </div>
      <div style={ styles.description }>
        { stopTitle }
      </div>
      <ArrivalTimes
        style={ styles.arrivalTimes }
        values={ values }
      />
    </div>
  );
};

const styles = {
  grid: {
    marginLeft: 20,
    marginRight: 20,
    width: 500,
    borderBottom: '1px solid #000000',
  },
  routeID: {
    display: 'block',
    width: 40,
    fontSize: 30,
    fontFamily: 'Arial',
    color: '#FF0000',
  },
  arrivalTimes: {
    display: 'block',
    textAlign: 'right',
  },
  description: {
    display: 'inline-block',
    width: 460,
  },
};

TransitRoute.propTypes = {
  route: React.PropTypes.object,
  stop: React.PropTypes.object,
  values: React.PropTypes.object,
  style: React.PropTypes.object,
};

export default TransitRoute;
