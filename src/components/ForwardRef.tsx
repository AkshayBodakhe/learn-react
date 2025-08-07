import { useRef } from "react";
import ForwardRefUser from "./ForwardRefUser";

function ForwardRefEx() {
  let inputRef = useRef<any>(null);
  function updateInput() {
    inputRef.current.value = "1000";
    inputRef.current.style.color = "red";
    inputRef.current.focus();
  }
  return (
    <div className="App">
      <h1>forwardRef in React </h1>
      <ForwardRefUser ref={inputRef} />
      <button onClick={updateInput}>Update Input Box</button>
    </div>
  );
}
export default ForwardRefEx;
