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
    state: 'MA'
  }
}


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
    return `${this.firstName} ${this.lastName}`
  }
}


// Destructuring (Get "firstName", "lastName", "city" from "person")
const { firstName, lastName, address: { city } } = person


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
