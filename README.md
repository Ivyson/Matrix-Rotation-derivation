# Matrix Rotation Derivation

This document shows how to derive matrix formulas for transformations.

## Things to Go Through
1. Camera Viewpoint
2. Projection Matrix
3. Orthogonal Matrix

## Project Requirements
- Weighing: 20%

## Look at These Implementations
1. Field Of View Matrix:
  
$$
\begin{bmatrix}
 \frac{1}{\tan(\theta)} & 0 & 0 & 0 \\
0 & \frac{1}{\tan(\theta)} & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & -1 & 0
\end{bmatrix}
$$

2. World View Matrix
3. Perspective Matrix
4. Scale Matrix:
  
$$
\begin{bmatrix}
 sx & 0 & 0 & 0 \\
0 & sy & 0 & 0 \\
0 & 0 & sz & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

## Handwriting the Derivation of the Matrix
- All of them

## Handwriting the Projection Matrix Derivation

## Test Next Week
1. Use the gl_Matrix Library
2. Camera Matrix
3. Know how to go about Texture Mapping
