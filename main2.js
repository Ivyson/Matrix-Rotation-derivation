function matmultiply(mat1, mat2) {
  let result = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = 0;
      for (let k = 0; k < 4; k++) {
        sum += mat1[i * 4 + k] * mat2[k * 4 + j];
        // console.log(sum);
      }
      result.push(sum);
    }
  }
  console.log(result);
  return result;
}

let mat1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let mat2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(matmultiply(mat1, mat2));
