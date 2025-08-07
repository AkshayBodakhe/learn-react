import '../App.css';
import React, { useState } from 'react'
function UseMemoHook() {
  const [count, setData] = useState(1)
  const [item, setItem] = useState(20)

  const newApple=React.useMemo(
    function appleTime() {
      console.warn("Hello")
      return 100 * count;
    }
  ,[item])
  return (
    <div className="App">
      <h1>Hooks in React {count}</h1>
    <h2>  {newApple}</h2>
      <button onClick={() => setData(count + 1)}>Update State</button>
      <button onClick={() => setItem(item * 10)}>Update State</button>

    </div>
  );
}

export default UseMemoHook;




