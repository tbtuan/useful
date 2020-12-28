---
title: 'Python'
metaTitle: 'Python'
metaDescription: 'Python'
date: 2020-12-23
---

## Cheatsheet

- [Python Cheatsheet](https://www.pythoncheatsheet.org/)
- [Python Crash Course](https://github.com/ehmatthes/pcc)
- [awesome-python](https://github.com/vinta/awesome-python)

<mc minWidth='800'>

<sc>

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

</sc>

<sc>

## Input

```python
name = input('Name:' )
print('Hello', name)
```

</sc>

<sc>

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

</sc>

<sc>

## List and tuples

```python
# list
x = [1, True, 'String']
print(x.pop())
x[0] = 0

# tuple no item assignments, immutable
tuple1 = (0, 1, 2, 3) 
```

</sc>

<sc>

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

</sc>

<sc>

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

</sc>

</mc>