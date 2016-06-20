export const arePositionsClose = (firstCoords, secondCoords) => {
  // check if coordinates are within 1m from each other
  if (firstCoords.longitude && firstCoords.latitude &&
    secondCoords.longitude && secondCoords.latitude) {
    const DECIMAL_PLACES = 4; // accuracy within 1.11 metters
    const lat1 = Number(firstCoords.latitude.toFixed(DECIMAL_PLACES));
    const long1 = Number(firstCoords.longitude.toFixed(DECIMAL_PLACES));
    const lat2 = Number(secondCoords.latitude.toFixed(DECIMAL_PLACES));
    const long2 = Number(secondCoords.longitude.toFixed(DECIMAL_PLACES));

    return (lat1 === lat2 && long1 === long2);
  }
  return false;
};
