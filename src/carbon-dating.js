const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 * t1/2 = 0.693/k.
 * T = ln(2)/λ = ln(2)*τ
 * 0.693 = ln(2)
 */
function dateSample(input) {
  let sampleActivity = parseFloat(input)
  if (!sampleActivity || typeof input !== 'string' ||sampleActivity <= 0 || sampleActivity >= MODERN_ACTIVITY) {
    return false;
  }
  let activity = Math.log(MODERN_ACTIVITY / sampleActivity)
  let k = Math.log(2) / HALF_LIFE_PERIOD

  return Math.ceil(activity / k)
}

module.exports = {
  dateSample
};
