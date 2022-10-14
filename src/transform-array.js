const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!")
  }

  let arrCopy = arr
  let transformedArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arrCopy[i] === '--double-prev') {
      if (i > 0) {
        transformedArr.push(arrCopy[i - 1])
      }
    } else if (arrCopy[i] === '--double-next') {
      if (i+1 < arrCopy.length) {
        transformedArr.push(arrCopy[i+1])
      }
    } else if (arrCopy[i] === '--discard-prev') {
      transformedArr.pop()
    } else if (arrCopy[i] === '--discard-next') {
      if (i+1 < arrCopy.length) {
        arrCopy[i+1] = null
      }
    } else {
      transformedArr.push(arrCopy[i])
    }
  }

  return transformedArr.filter((v) => v !== null)
}

module.exports = {
  transform
};
