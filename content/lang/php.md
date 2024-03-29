---
title: 'PHP'
description: 'PHP'
date: 2021-01-28
tags: ["web-development", "backend"]
---

## Ecosystem

- [Laravel](https://laravel.com/docs)
- [Composer](https://getcomposer.org/doc/)

<MC>

<SC>

## Echo

```php
<?php echo $a; ?>
<?= /*Shorthand*/ $a; ?>
```

</SC>

<SC>

## Array

```php
// Methods
count($array);
array_unshift($array, 5, 6, 7); // Von vorne einfügen
array_pop($array);
array_shift($array);
array_key_exists($key, $array);

// Array initialization
$array2 = array();
$array2["key1"] = "value1";
$array2["key2"] = "value2";
// Shorthand
$array2 = array("key1" => "value1", "key2" => "value2");
```

</SC>

<SC>

## Foreach

```php
foreach($array as $key => $value) {
	echo $key.$value;
}
```

</SC>

<SC>

## Class

```php
class Point {

	private $x;
	private $y;

	// __contruct = constructor
	function __construct($x, $y) {
		// this isn't optional
		$this->x = $x;
		$this->y = $y;
	}
	// Getter
	function getX() {
		return $this->x;
	}

	function getY() {
		return $this->y;
	}

	// Function with $array (passed by ref) default parameters
	function &returnFirstElement(&$array, $a=123) {
	// & before function name + $array
	  return $array[0];
	}

}

$p = new Point(1, 2);
```

</SC>

</MC>
