---
title: 'CSS'
metaTitle: 'CSS'
metaDescription: 'CSS Resources and tricks'
date: 2020-12-29
---

## Resources

- [cssreference.io](https://cssreference.io/)
- [CSS Reference - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

<mc minWidth='800'>

<sc>

## CSS Grid without media queries

```css
main {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax($WIDTH, 1fr));
	grid-gap: 1rem;
}

grid-template-columns: repeat(auto-fit, minmax(0, min-content));
```
### See

[CSS Grid Layout](https://drafts.csswg.org/css-grid/#auto-repeat)

</sc>

<sc>

## Navbar

```css
ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

li a {
	display: block;
	text-decoration: none;
}

li a:hover {
  
}
```
### See

[CSS Grid Layout](https://drafts.csswg.org/css-grid/#auto-repeat)

</sc>

<sc>

## Anchor link offset

```css
#anchor-link {
  /* "40px" = e.g. height of fixed navbar */
  /* .../#anchor-link offset of 40px */
  margin-top: -40px;
  padding-top: 40px;
}
```

</sc>

</mc>