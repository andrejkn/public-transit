import React from 'react';

const TransitRoute = ({
  route,
  stop,
  values,
}) => {
  const routeID = route.get('id');
  const stopTitle = stop.get('title');
  const times = values.map((value, vIndex) => {
    return (
      <span key={ 'arrival_times_' + vIndex }>
        { value.get('minutes') }
        { (vIndex === values.size - 1) ? '.' : ', ' }
      </span>
    );
  });
  return (
    <div>
      { routeID }
      <br />
      { stopTitle }
      <br />
      { 'Next bus arriving in ' }
      { times }
      <hr />
    </div>
  );
};

TransitRoute.propTypes = {
  route: React.PropTypes.object,
  stop: React.PropTypes.object,
  values: React.PropTypes.object,
};

export default TransitRoute;
