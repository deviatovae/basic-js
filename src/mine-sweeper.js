const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = []
  let n = matrix.length
  let m = matrix[0].length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let bombCount = 0
      if (i-1 >= 0) {
        if ((j-1 >= 0 && matrix[i-1][j-1]) || matrix[i-1][j] || (j+1 < m && matrix[i-1][j+1])) {
          bombCount++
        }
      }
      if ((j-1 >= 0 && matrix[i][j-1]) || (j+1 < m && matrix[i][j+1]))  {
        bombCount++
      }
      if (i+1 < n) {
        if ((j-1 >= 0 && matrix[i+1][j-1]) || matrix[i+1][j] || (j+1 < m && matrix[i+1][j+1])) {
          bombCount++
        }
      }

      if (!result[i]) {
        result[i] = []
      }
      result[i][j] = bombCount
    }
  }

  return result
}

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])

module.exports = {
  minesweeper
};
