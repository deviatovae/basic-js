const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newNames = []
  let currentNames = {}
  for(let name of names) {
    let postfix = ''
    if(!currentNames[name]) {
      currentNames[name] = 1
    } else if(currentNames[name]){
      postfix = '(' + currentNames[name] + ')'
      currentNames[name+postfix] = 1
      currentNames[name]++
    }
    newNames.push(name + postfix)
  }
  return newNames

}

module.exports = {
  renameFiles
};
