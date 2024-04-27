# Matrix Rotation Derivation

This document shows how to derive matrix formulas for transformations.

## Things to Go Through
1. Camera Viewpoint
2. Projection Matrix
3. Orthogonal Matrix

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

2. Rotation Along X:
$$
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & \cos(\theta) & -\sin(\theta) & 0 \\
0 & \sin(\theta) & \cos(\theta) & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

3. Rotation Along Y:
$$
\begin{bmatrix}
\cos(\theta) & 0 & \sin(\theta) & 0 \\
0 & 1 & 0 & 0 \\
-\sin(\theta) & 0 & \cos(\theta) & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

4. Rotation Along Z:
$$
\begin{bmatrix}
\cos(\theta) & -\sin(\theta) & 0 & 0 \\
\sin(\theta) & \cos(\theta) & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

5. Perspective Matrix

6. Scale Matrix:
  
$$
\begin{bmatrix}
 s_x & 0 & 0 & 0 \\
0 & s_y & 0 & 0 \\
0 & 0 & s_z & 0 \\
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
