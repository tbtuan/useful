---
title: 'Numpy'
description: 'Multidimensional array'
date: 2022-11-30
tags: ["python"]
---

## Resources

- [NumPy documentation](https://numpy.org/doc/stable/reference/index.html)


<MC>

<SC>

## Basic operations

```python
import numpy as np
# math.exp but with broadcasting
np.exp([1,2,3])
# Generate 2D array (3x3 filled with 1)
np.ones((3, 3))
```

</SC>

<SC>

## Reshape

```python
# integers from 0 to 9; shape: (9, )
array = np.arange(9)
# reshape into a row; shape: (1, 9)
row_vector = array.reshape(1,9)
# -1 to assign one dimension dynamically (same output); shape: (1, 9)
row_vector = array.reshape(1,-1)
# Transpose (9, ) => (9, 1)
column_vector = row_vector.T
# Reshape to a 3x3 matrix
matrix = array.reshape(3,3)
```

</SC>

<SC>

## Slicing

```python
M = np.arange(16).reshape(4,4)
# or M[0]
first_row = M[0,:]
# M[0:3]
first_to_third_row = M[0:3,:]
every_second_column = M[:,::2] 
flipped_rows = M[:,::-1]
```

</SC>

</MC>