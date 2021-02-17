---
title: 'Pandas'
description: 'Data manipulation tool'
date: 2020-12-07
tags: ["python"]
---

- [Pandas API Reference](https://pandas.pydata.org/pandas-docs/stable/reference/index.html#api)

<mc minWidth='800'>

<sc>

## Read csv

```python
import pandas as pd
# Dataframe
df = pd.read_csv('file.csv', sep=';')
# First row
df.head(1)
```

</sc>

<sc>

## Rename columns

```python
df = df.rename(columns={'old_name':'new_name'})  
```

</sc>

<sc>

## Select row/column

```python
row_data = df[df.old_name == 'stuff']
column_data = df.old_name
# Select column 'column1' and 'column2'
df[['column1', 'column2']]
# Select row 1 and 2 in column 'stuff1', 'stuff2'
df.loc[[1, 2], ['stuff1', 'stuff2']]
df.loc[1:2, ['stuff1', 'stuff2']]
```

</sc>

</mc>