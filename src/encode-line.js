const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str.length) {
    return ''
  }

  let newStr = ''
  let count = 1
  let currentLetter = str[0]

  for(let i = 1; i < str.length; i++) {
    if(str[i] === currentLetter) {
      count++
    }else{
      newStr += (count > 1 ? count : '') + currentLetter
      currentLetter = str[i]
      count = 1
    }
  }

  newStr += (count > 1 ? count : '') + currentLetter

  return newStr
}

module.exports = {
  encodeLine
};
