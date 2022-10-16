const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let array1 = s1.split('')
    let array2 = s2.split('')
    let overlap = {}

    for (let letter of array1) {
        if (!overlap[letter]) {
            overlap[letter] = 0
        }
        overlap[letter]++
    }

    return array2.filter((letter) => {
        if (!overlap[letter]) {
            return false
        }
      overlap[letter]--
        return true
    }).length

}

module.exports = {
    getCommonCharacterCount
};
