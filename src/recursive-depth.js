const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    return arr.reduce((depth, item) => {
      if (Array.isArray(item)) {
        return Math.max(depth, 1 + this.calculateDepth(item));
      }
      return depth;
    }, 1);
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
