const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options
    let result = ''

    repeatTimes = repeatTimes ?? 1
    separator = separator ?? '+'
    addition = addition !== undefined ? addition : ''
    additionSeparator = additionSeparator ?? '|'
    additionRepeatTimes = additionRepeatTimes ?? 1

    while (repeatTimes) {
        result += str
        for (let i = 0; i < additionRepeatTimes; i++) {
            result += addition
            if (i < additionRepeatTimes - 1) {
                result += additionSeparator
            }
        }
        if (repeatTimes - 1) {
            result += separator
        }
        repeatTimes--
    }

    return result
}

module.exports = {
    repeater
};
