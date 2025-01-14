/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;

    for (var i=0; i<n; i++) {
        for (var j=i+1; j<n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (var k=0; k<n; k++) {
        matrix[k].reverse();
    }

    return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));