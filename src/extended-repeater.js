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
    let {repeatTimes, separator} = options
    let {addition, additionRepeatTimes, additionSeparator} = options
    let result = ''
    if (!separator) {
        separator = '+'
    }
    if (!additionSeparator) {
        additionSeparator = '|'
    }

    while (repeatTimes) {
        result += str
        for (let i = 0; i < additionRepeatTimes; i++) {
            result += addition
            if (additionRepeatTimes) {
                result += additionSeparator
            }
            additionRepeatTimes--
            if (i < additionRepeatTimes) {
                result += separator
            }
        }
        repeatTimes--
    }



    return result
}

console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 }))
console.log('REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION')

module.exports = {
    repeater
};
