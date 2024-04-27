# Matrix-Rotation-derivation
This has a word document that shows how to derive matrix formulas for transformation.
**Things to go through**
1. Camera view point,
2. Projection Matrix
3. Orthogonal Matrix


## Project Requirements
1. Weighing - 20%


   
## Look at these implementations
1. Scaling Matrix = (
\begin{pmatrix} s_x & 0 & 0 & 0 \\ 0 & s_y & 0 & 0 \\ 0 & 0 & s_z & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}
);
4. World View Matrix
5. Perspective Matrix
6. Field of View

$$



This is for Field of view:
\begin{bmatrix}
\frac{1}{\tan(\theta)}
& 0 & 0 & 0 \\
0 & \frac{1}{\tan(\theta)} 
 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & -1 & 0
\end{bmatrix}
$$

  
8. Hand - write the derivation of the matrix (All of them)
9. Hand - write the projection Matrix derivation


## Test next week
1. Use gl_Matrix Library
2. Camera Matrix
3. Know how to go about Texture mapping
