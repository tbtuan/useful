---
title: 'Javascript'
metaTitle: 'Syntax Highlighting is the meta title tag for this page'
metaDescription: 'This is the meta description for this page'
---

## Placeholder

[JavaScript Pro Tips - Code This, Not That](https://github.com/codediodeio/code-this-not-that-js)

```js
// Object literals
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA',
  },
};

// Classes
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear();
  }

  // Get Full Name
  getFullName() {
    // String interpolation
    return `${this.firstName} ${this.lastName}`;
  }
}

// Destructuring (Get "firstName", "lastName", "city" from "person")
const {
  firstName,
  lastName,
  address: { city },
} = person;

// short-circuit evaluation
let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
// Same code but shorter
let defaultName = username || 'Stranger';
```

### RegEx

[RegExp](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

```js
let string = 'This is a string 123';
// Regex + flag (i = ignorecase, g = global)
let regex = /this|string|\d/gi;
regex.test(string);
string.match(regex);
```
