---
title: 'matplotlib'
description: 'Data visualization'
date: 2020-12-08
tags: ["python", "data-visualization"]
---

## Resources

- [matplotlib documentation](https://matplotlib.org/contents.html)


<mc minWidth='800'>

<sc>

## Simple plot

```python
import matplotlib.pyplot as plt
x = [1, 2, 3, 4, 5]
y1 = [10, 20, 30, 40, 50]
y2 = [15, 25, 35, 45, 55]
# Multiple plots
# 1. Plot r = red and o = scatter
# 2. Plot g = green
plt.plot(x, y1, 'ro'
         x, y2, 'g')
plt.xlabel('x')
plt.ylabel('y')
# min x, max x, min y, max y
plt.axis([1, 5, 10, 50])
plt.show()
```

### See

- [Controlling line properties](https://matplotlib.org/tutorials/introductory/pyplot.html#controlling-line-properties)

</sc>

<sc>

## Figure

```python
# Figure identifier, figsize=size in inches
fig = plt.figure(1, figsize=[6.4, 4.8])

# Same semantics (nrows, ncols, index)
ax1 = fig.add_subplot(121)
ax2 = fig.add_subplot(1, 2, 1)

ax1.plot(x, y)
ax2.scatter(x, y2)
```
### See

- [Figure.add_subplot](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure.add_subplot)

</sc>

<sc>

## Subplot

```python
#mrow, ncols, frameon=drawing the figure background patch, figsize=size in inches
fig, axes = plt.subplots(2, 2, frameon=False, figsize=(20, 16))
# 1. row, 2. column
axes[0, 1].scatter(x, y)
# 2. row, 1. column
axes[1, 0].plot(x, y2)
plt.show()
```

</sc>

</mc>