import React, { useState } from "react";

export const Appp = () => {
  return (
    <div style={{ flex: 1, width: 200 }}>
      <h1>HOC</h1>
      <HOC cmp={Counter} />
    </div>
  );
};

const HOC = (props: any) => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <props.cmp />
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
