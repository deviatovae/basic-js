const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, [[], [[]], 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0
    for (let item of arr) {
      if (Array.isArray(item)) {
        let innerDepth = this.calculateDepth(item)
        if (innerDepth > maxDepth) {
          maxDepth = innerDepth
        }
      }
    }

    return maxDepth + 1
  }
}

module.exports = {
  DepthCalculator
};
