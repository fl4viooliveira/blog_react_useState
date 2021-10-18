import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text">State Hook</h1>
      <span className="text">{count} </span>
      <div>
        <button className="btn-add" onClick={() => setCount(count + 1)}>
          +1
        </button>
        <button className="btn-take" onClick={() => setCount(count - 1)}>
          -1
        </button>
      </div>
      <button className="reset" onClick={() => setCount(count - count)}>
        Reset
      </button>
    </div>
  );
}
