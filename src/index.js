module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] == 0) {
        //pn - possible number
        for (let pn = 1; pn <= pn; pn++) {
          if (checkRow(matrix, col, pn) && checkCol(matrix, row, pn) && check3x3(matrix, row, col, pn)) {
            matrix[row][col] = pn;
            if (solveSudoku(matrix)) {
              return matrix;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function checkRow(matrix, col, pn) {
  for (let i = 0; i < 9; i++) {
    if (matrix[i][col] == pn) {
      return false;
    }
  }
  return true;
}

function checkCol(matrix, row, pn) {
  for (let i = 0; i < 9; i++) {
    if (matrix[row][i] == pn) {
      return false;
    }
  }
  return true;
}

function check3x3(matrix, row, col, pn) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix[Math.floor(row / 3) * 3 + i][Math.floor(col / 3) * 3 + j] == pn) {
        return false;
      }
    }
  }
  return true;
}
