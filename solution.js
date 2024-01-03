function diagonalDifference(arr) {
     const len = arr.length;
     let diagonalSum = 0;
     let counterDiagonalSum  = 0;

     for (let i = 0; i < len; i++) {
        diagonalSum += arr[i][i];
        counterDiagonalSum += arr[i][len - i - 1];
     }
     return Math.abs(diagonalSum - counterDiagonalSum);
}
const result = diagonalDifference([
    [1,8,7],
    [2,9,6],
    [3,4,5]
]);
console.log("This is the absolute difference: ", result);