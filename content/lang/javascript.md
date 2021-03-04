---
title: 'Javascript'
description: 'Javascript'
date: 2021-01-28
tags: ["javascript", "web-development"]
---

## Resources

- [awesome-javascript](https://github.com/sorrycc/awesome-javascript)
- [JavaScript Pro Tips - Code This, Not That](https://github.com/codediodeio/code-this-not-that-js)
- [NodeJS documentation](https://nodejs.org/en/docs/)
- [stateofjs](https://stateofjs.com/)
- [3 node.js scalability problems and how to solve them](https://softwareontheroad.com/nodejs-scalability-issues/)
- [Good practices for high-performance and scalable Node.js applications](https://medium.com/iquii/good-practices-for-high-performance-and-scalable-node-js-applications-part-1-3-bb06b6204197)
- [Source map](https://blog.teamtreehouse.com/introduction-source-maps)

## Ecosystem

- [npm documentation](https://docs.npmjs.com/)
- [NodeJS](https://nodejs.org/docs/latest/api/)
- [lodash](https://lodash.com/docs)
- [concurrently](https://www.npmjs.com/package/concurrently)

### Bundlers

- [webpack](https://webpack.js.org/concepts/)


<mc>

<sc>

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

</sc>

<sc>

### RegEx

[RegExp](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

```js
let string = 'This is a string 123';
// Regex + flag (i = ignorecase, g = global)
let regex = /this|string|\d/gi;
regex.test(string);
string.match(regex);
```

</sc>

</mc>