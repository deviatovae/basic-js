const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],

  getLength() {
    return this.array.length
  },
  addLink(value) {
    this.array.push(value)
    return this
  },
  removeLink(position) {
    let pos = parseInt(position)
    if(!pos || pos !== position || Math.trunc(position) !== position || position < 1 || position > this.array.length) {
      this.array = []
      throw new Error("You can't remove incorrect link!")
    }
    this.array.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.array = this.array.reverse()
    return this
  },
  finishChain() {
    let finalArray = this.array.map((e) => `( ${e} )`).join('~~')
    this.array = []
    return finalArray
  }
};

module.exports = {
  chainMaker
};