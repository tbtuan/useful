---
title: 'CSS'
description: 'CSS Resources and tricks'
date: 2021-03-06
tags: ["css", "styling"]
---

## Related

- [Bootstrap](/lang/bootstrap)
- [Sass](/lang/sass)
## Resources

- [cssreference.io](https://cssreference.io/)
- [CSS Reference - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [BEM](https://www.integralist.co.uk/posts/bem/)
- [stateofcss](https://stateofcss.com/)

## Ecosystem

- [CSS Animation libraries](https://css-tricks.com/css-animation-libraries/)
- [Bootstrap](https://getbootstrap.com/docs/)
- [TailwindCSS](https://tailwindcss.com/)
- [Sass](https://sass-lang.com/documentation)
- [PostCSS](https://postcss.org/)

<mc>

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

<sc>

## Center div

```css
.parent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}

.child {
    width: 100px;
    height: 100px;
}
```

</sc>

<sc>

## Enable/Disable scrolling

```css
/*Toggle class*/
body.overflow {
    overflow: hidden;
}
```

</sc>

</mc>