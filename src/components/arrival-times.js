import React from 'react';

const ArrivalTimes = ({ values, style }) => {
  const times = values.map((value, vIndex) => {
    const fTime = (value.get('minutes') <= 0) ?
      'now' : value.get('minutes') + ' min';
    return (
      <span
        style={ styles.timeItem }
        key={ 'arrival_times_' + vIndex }
      >
        { fTime }
        <br/>
      </span>
    );
  });
  return (
    <div style={ Object.assign({}, style) }>
      { times }
    </div>
  );
};

const styles = {
  timeItem: {
    fontSize: 30,
    color: '#e6974b',
  },
};

ArrivalTimes.propTypes = {
  values: React.PropTypes.object,
  style: React.PropTypes.object,
};

export default ArrivalTimes;
