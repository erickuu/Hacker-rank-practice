
function diagonalDifference(arr) {
    // Write your code here
    var matrix = {
      len : arr.length,
      sideOne:0, // 1,5,9 <- first diagonal
      sideTwo:0, // 3,5,9 <- Second Diagonal
    };

    for (var i = 0; i < arr.length; i++) {
      (matrix.sideOne += arr[i][i]);
      (matrix.sideTwo += arr[matrix.len - 1 -i][i]);
    };

   return (Math.abs(matrix.sideTwo - matrix.sideOne));
}

diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]);

