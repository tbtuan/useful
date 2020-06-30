---
title: "ReactJS"
metaTitle: "Reactjs - /useful"
metaDescription: "Javascript - ReactJS"
date: 2020-06-30
---

## Resources

- [React documentation](https://reactjs.org/docs/react-api.html)
- [React lifecycle methods diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

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

## Props in JSX

```jsx
// Inside App.js
import React from "react";

const App = () => {
  return <Card name="Name" img="https://via.placeholder.com/200x120" />;
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

## States

```jsx
constructor(props) {
  super(props);
  this.state = { counter: 0 };
}

```

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

## Change state

```jsx
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleCustomClick = this.handleCustomClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleCustomClick(number) {
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
                  onClick={() => this.handleCustomClick(Math.random())}
                  handleCustomClick={this.handleCustomClick}>Custom count</button>
            </div>
        )
    }
}

// Triggering handleClick on another component using props
onClick={() => props.handleCustomClick(42)}
onClick={() => props.handleCustomClick(props.number)}
```
