import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCount = () => {
    // this will be called even if we are updating other value i.e, item
    console.log("multicount");
    return count * 1;
  };

  // here we are updating count , so it won't run on updating item
  const multiCountMemo = useMemo(
    function multiCount() {
      console.log("multiCountMemo");
      return count * 1;
    },
    [count]
  );

  return (
    <div>
      <h1>useMemo hook</h1>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      {/* <h2>{multiCount()}</h2> */}
      <h2>multiCountMemo : {multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setItem(item * 2)}>Update item</button>
    </div>
  );
};

export default UseMemoHook;
