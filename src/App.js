import "./App.css";
import { useState } from "react";

function App(props) {

  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundColor: props.color}} className="App">
      <span>
        <h1 style={{fontSize: `${props.size}px`}}>Hello, {count} times</h1>
        <button onClick={() => {
          setCount(count + 1)
        }}>
          Increase the Hello Times
        </button>
      </span>

      <span>
        <button
          onClick={() => {
            setCount(count - 1)
          }}
        >
         Decrease the Hello Times
        </button>
      </span>
    </div>
  );
}

export default App;
