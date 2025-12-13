let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
        document.write(`${A[i][j]} `);
    }
    document.write("<br/>");
}