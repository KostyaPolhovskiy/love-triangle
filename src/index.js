/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  const CYCLE_SIZE = 3;

  var temp, numTriangl = 0;

  for (var i = 0; i < preferences.length; i++) {
    temp = preferences[i];
    
    for (var j = 0; j < CYCLE_SIZE - 1; j++) {
      temp = preferences[temp - 1];
    }
    
    if (temp == i + 1)
      numTriangl++;
  }

return Math.floor(numTriangl / 3);
};
