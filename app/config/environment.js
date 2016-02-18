var _ = require('lodash');

var localEnvVars = {
  TITLE:      'workout_of_day',
  SAFE_TITLE: 'workout_of_day'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
