---
title: 'Python'
description: 'Python'
date: 2020-12-23
tags: ["python"]
---

## Resources

- [Python Cheatsheet](https://www.pythoncheatsheet.org/)
- [Python Crash Course](https://github.com/ehmatthes/pcc)
- [awesome-python](https://github.com/vinta/awesome-python)

## Ecosystem

- [Tensorflow](https://www.tensorflow.org/api_docs/python/)
- [matplotlib](https://matplotlib.org/contents.html)
- [NumPy](https://numpy.org/doc/stable/reference/index.html)
- [Pandas](https://pandas.pydata.org/docs/)
- [OpenCV](https://opencv.org/)

<MC>

<SC>

## Data types

```python
# Integer
12
# Float
42.0
42.1
# String
'String'
"also a String"
"5.4"
# Boolean
True
False
```

</SC>

<SC>

## Input

```python
name = input('Name:' )
print('Hello', name)
```

</SC>

<SC>

## Conditions

```python
always_true = True or False and not False
x = 1
if (x == 1):
    print('One')
elif (x <= 2):
    print('Two')
else
    print('Something else')
```

</SC>

<SC>

## List and tuples

```python
# list
x = [1, True, 'String']
print(x.pop())
x[0] = 0

# tuple no item assignments, immutable
tuple1 = (0, 1, 2, 3) 
```

</SC>

<SC>

## Loops

```python
# range(stop)
# range(start, stop)
# range(start, stop, step)
for i in range(10, -1, -1):
    print(i)

x =['a', 'b', 'c']
# index + element
for i, element in enumerate(x):
    print(i, element)

while True:
    print('runs forever')
```

</SC>

<SC>

## Unpacking arguments

```python
# *args and **kwargs
# Unpacking list *
# Unpacking dictionaries ** 

def fun1(a, b, c): 
    print(a, b, c) 
  
l = [1, 2, 3] 

fun1(*l) 

def fun2(a, b, c): 
    print(a, b, c) 
  
d = {'a':1, 'b':2, 'c':3} 
fun2(**d) 

def func3(*args, **kwargs):
    print(args, kwargs)

func3(1, 2, 3, a=1, b=1)

```

</SC>

<SC>

## Classes

```python
# Inheritance

class Parent:

def __init__(self):
    pass

class child(Parent):
    pass

```

</SC>

</MC>