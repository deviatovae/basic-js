const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect ?? true
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`)
    }

    message = message.toLowerCase()
    key = key.toLowerCase()

    let keyArr = this._prepareKey(message, key)
    let cipheredMessage = []
    let keyIndex = 0
    for (let i = 0; i < message.length; i++) {
      let letter = message[i]
      let letterCode = letter.charCodeAt(0)

      if (letterCode >= 97 && letterCode <= 122) {
        let offset = keyArr[keyIndex].charCodeAt(0) - 97

        letter = String.fromCharCode((letterCode - 97 + offset) % 26 + 97)
        keyIndex++
      }

      cipheredMessage.push(letter)
    }

    if (!this.isDirect) {
      cipheredMessage = cipheredMessage.reverse()
    }

    return cipheredMessage.join('').toUpperCase()
  }

  decrypt(cipheredMessage, key) {
    if (!cipheredMessage || !key) {
      throw new Error(`Incorrect arguments!`)
    }
    cipheredMessage = cipheredMessage.toLowerCase()
    key = key.toLowerCase()

    let keyArr = this._prepareKey(cipheredMessage, key)
    let decipheredMessage = []
    let keyIndex = 0
    for (let i = 0; i < cipheredMessage.length; i++) {
      let letter = cipheredMessage[i]
      let letterCode = letter.charCodeAt(0)

      if (letterCode >= 97 && letterCode <= 122) {
        let offset = keyArr[keyIndex].charCodeAt(0) - 97
        letter = String.fromCharCode((letterCode - 97 - offset + 26) % 26 + 97)
        keyIndex++
      }

      decipheredMessage.push(letter)
    }

    if (!this.isDirect) {
      decipheredMessage = decipheredMessage.reverse()
    }

    return decipheredMessage.join('').toUpperCase()
  }

  _prepareKey(message, key) {
    let filteredMsg = message.split('').filter((symbol) => {
      let asciiSymbol = symbol.charCodeAt(0)
      return asciiSymbol >= 97 && asciiSymbol <= 122
    })

    let keyArr = key.split('')
    let letterDiff = filteredMsg.length - keyArr.length
    let keyLength = keyArr.length

    for (let i = 0; i < letterDiff; i++) {
      keyArr.push(keyArr[i % keyLength])
    }

    return keyArr
  }
}

module.exports = {
  VigenereCipheringMachine
};
