const { NotImplementedError } = require("../lib");

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
  let result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    result.push([]);

    for (let j = 0; j < matrix[i].length; j += 1) {
      result[i].push(0);
    }
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j]) {
        result[i][j] = 1;
      } else {
        let count = 0;

        for (let x = -1; x <= 1; x += 1) {
          // строки
          for (let y = -1; y <= 1; y += 1) {
            // столбцы

            if (
              i + x >= 0 && // верхняя граница не выходит за матрицу
              i + x < matrix.length && //нижняя граница не выходит за матрицу
              j + y >= 0 && // не выходим за левый край
              j + y < matrix[i].length // не выходим за правый край
            ) {
              if (matrix[i + x][j + y]) {
                count += 1;
              }
            }
          }
        }

        result[i][j] = count;
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
