---
title: "ReactJS"
metaTitle: "Reactjs - /useful"
metaDescription: "Javascript - ReactJS"
date: 2020-07-15
---

## Resources

- [React documentation](https://reactjs.org/docs/react-api.html)
- [React lifecycle methods diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
- 

<mc minWidth='800'>

<sc>

## Render

```jsx
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <p>1</p>
    <p>2</p>
  </div>,
  document.getElementById("root")
);
```

</sc>

<sc>

## Javascript in JSX

```jsx
import React from "react";
import ReactDOM from "react-dom";

function App() {
  const number = 1;
  return (
    <div>
      <p>{number}</p>
      <p>2</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

</sc>

<sc>

## CSS in JSX

```jsx
import React from "react";
import ReactDOM from "react-dom";

function App() {
  const style = {
    color: "black",
    backgroundColor: "yellow",
  };
  return (
    <div>
      <p style={style}>1</p>
      <p className="myClass">2</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

</sc>

<sc>

## Props in JSX

```jsx
// Inside App.js
import React from "react";

const App = () => {
  return <Card name="Name" img="https://via.placeholder.com/20" />;
};

// Inside Card.js
import React from "react";

const Card = (props) => {
  return (
    <div>
      <img src={props.img} />
      <h2>{props.name}</h2>
    </div>
  );
};
```

</sc>

<sc>

## High Order Functions

```jsx
// Inside App.js
import React from "react";

const App = () => {
  const cardsComponent = cardsData.map((card) => (
    <Card key={card.id} img={card.img} name={card.name} />
  ));

  return <div>{cardsComponent}</div>;
};
```

</sc>

<sc>

## Class-Components

```jsx
// Inside App.js
import React, { Component } from "react";

class App extends Component {
  render() {
    const cardsComponent = cardsData.map((card) => (
      <Card key={card.id} img={card.img} name={card.name} />
    ));
    return <div>{cardsComponent}</div>;
  }
}
```

</sc>

<sc>

## States

```jsx
constructor(props) {
  super(props);
  this.state = { counter: 0 };
}

```

</sc>

<sc>

## Event handling

```jsx
function handleClick() {
  console.log("Button 1 was clicked");
}

function App() {
  return (
    <div>
      <button onClick={handleClick}>Button 1</button>
      <button onClick={() => console.log("Button 2 was clicked")}>
        Button 2
      </button>
    </div>
  );
}
```

</sc>

<sc>

## Change state

```jsx
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleClick2(number) {
        this.setState(prevState => {
            return {
                count: prevState.count + number
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Count</button>
                <button
                  onClick={() => this.handleClick2(Math.random())}
                  handleClick2={this.handleClick2}>
                  Custom count
                </button>
            </div>
        )
    }
}

// Triggering handleClick on another component using props
onClick={() => props.handleClick2(42)}
onClick={() => props.handleClick2(props.number)}
```

</sc>

<sc>

## React API Pitfalls

```jsx
/*
Only Call Hooks at the Top Level
Don’t call Hooks inside loops, conditions, 
or nested functions.

Low frequency updates like themes => Context API
High frequency updates => React Redux

Use useMemo for performance optimization, 
not as a semantic guarantee.
*/
```

### See

- [Rules of Hooks - React](https://reactjs.org/docs/hooks-rules.html)
- [React Top-Level API - React.memo](https://reactjs.org/docs/react-api.html#reactmemo)
- [Pitfalls of overusing React Context](https://blog.logrocket.com/pitfalls-of-overusing-react-context/)

</sc>

</mc>
