const a = [
  [1, 2],
  [3, 4],
];

const inverse = (m, i) => {
  const [[a, b], [c, d]] = m;
  const det = a * d - b * c;
  const newmatrix = [];

  for (i = 0; i < m.length; i++) {
    newmatrix[i] = [];
    for (j = 0; j < m[0].length; j++) {
        
        newmatrix[i][j]= m[i][j]/det;
    }
  }

  console.log(newmatrix)
};


inverse(a);
