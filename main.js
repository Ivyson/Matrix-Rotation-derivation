function manualMultiply(mat1, mat2)
{
    let result = new Float32Array(16).fill(0);
    result[0] = mat1[0]*mat2[0]+ mat1[1]*mat2[4] +mat1[2]*mat2[8]+ mat1[3]*mat2[12]; //Row 1, Column 1
    result[1] =  mat1[0]*mat2[1]+ mat1[1]*mat2[5] +mat1[2]*mat2[9]+ mat1[3]*mat2[13]; //Row 1, Column 2
    result[2] =  mat1[0]*mat2[2]+ mat1[1]*mat2[6] +mat1[2]*mat2[10]+ mat1[3]*mat2[14]; //Row 1, Column 3
    result[3] =  mat1[0]*mat2[3]+ mat1[1]*mat2[7] +mat1[2]*mat2[11]+ mat1[3]*mat2[15]; //Row 1, Column 4
    result[4] = mat1[4]*mat2[0]+ mat1[5]*mat2[4] +mat1[6]*mat2[8]+ mat1[7]*mat2[12]; //Row 2, Column 1
    result[5] =  mat1[4]*mat2[1]+ mat1[5]*mat2[5] +mat1[6]*mat2[9]+ mat1[7]*mat2[13]; //Row 2, Column 2
    result[6] =  mat1[4]*mat2[2]+ mat1[5]*mat2[6] +mat1[6]*mat2[10]+ mat1[7]*mat2[14]; //Row 2, Column 3
    result[7] =  mat1[4]*mat2[3]+ mat1[5]*mat2[7] +mat1[6]*mat2[11]+ mat1[7]*mat2[15]; //Row 2, Column 4
    result[8] = mat1[8]*mat2[0]+ mat1[9]*mat2[4] +mat1[10]*mat2[8]+ mat1[11]*mat2[12]; //Row 3, Column 1
    result[9] =  mat1[8]*mat2[1]+ mat1[9]*mat2[5] +mat1[10]*mat2[9]+ mat1[11]*mat2[13]; //Row 3, Column 2
    result[10] =  mat1[8]*mat2[2]+ mat1[9]*mat2[6] +mat1[10]*mat2[10]+ mat1[11]*mat2[14]; //Row 3, Column 3
    result[11] =  mat1[8]*mat2[3]+ mat1[9]*mat2[7] +mat1[10]*mat2[11]+ mat1[11]*mat2[15]; //Row 3, Column 4
    result[12] = mat1[12]*mat2[0]+ mat1[13]*mat2[4] +mat1[14]*mat2[8]+ mat1[15]*mat2[12]; //Row 4, Column 1
    result[13] =  mat1[12]*mat2[1]+ mat1[13]*mat2[5] +mat1[14]*mat2[9]+ mat1[15]*mat2[13]; //Row 4, Column 2
    result[14] =  mat1[12]*mat2[2]+ mat1[13]*mat2[6] +mat1[14]*mat2[10]+ mat1[15]*mat2[14]; //Row 4, Column 3
    result[15] =  mat1[12]*mat2[3]+ mat1[13]*mat2[7] +mat1[14]*mat2[11]+ mat1[15]*mat2[15]; //Row 4, Column 4
    console.log(result);
}
let mat1 = [
    0, 1, 2, 3,
    4, 5, 6, 7,
    8, 9, 10, 11,
    12, 13, 14, 15
];

let mat2 = [
    0, 1, 2, 3,
    4, 5, 6, 7,
    8, 9, 10, 11,
    12, 13, 14, 15
];
manualMultiply(mat1, mat2);