### Render

```jsx
import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(
  <div>
    <p>1</p>
    <p>2</p>
  </div>
  , document.getElementById("root")
)
```

### Javascript in JSX

```jsx
import React from "react"
import ReactDOM from "react-dom"

function App() {
  const number = 1;
  return (
      <div>
        <p>{number}</p>
        <p>2</p>
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
```

### Inline-CSS in JSX

```jsx
import React from "react"
import ReactDOM from "react-dom"

function App() {
  const style = {
    color: "black",
    backgroundColor: "yellow"
  };
  return (
      <div>
        <p style={style}>1</p>
        <p>2</p>
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
```
