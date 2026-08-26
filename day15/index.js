const matrix1 = [
    [1,2],
    [3,4]
]

const matrix2 = [
    [5,6],
    [7,8]
]

console.log(matrix1[1][1]);
console.log(matrix1.length)

 function add(m1,m2){
    let result=[];
    for (i=0;i<m1.length; i++){
        result[i] = [];
        for(j=0; j<m2.length; j++){
            result[i][j]= m1[i][j]+m2[i][j]
        };
    };
    return result;
 }
 

  function subtract(m1,m2){
    let result=[];
    for (i=0;i<m1.length; i++){
        result[i] = [];
        for(j=0; j<m2.length; j++){
            result[i][j]= m1[i][j]-m2[i][j]
        };
    };
    return result;
 }

 function multiplication(m1,m2){
    let result=[];
    for (i=0;i<m1.length; i++){
        result[i] = [];
        for(j=0; j<m2.length; j++){
            result[i][j]= m1[i][j] * m2[i][j]
        };
    };
    return result;
 }

 console.log(multiplication(matrix1,matrix2))