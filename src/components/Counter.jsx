import React from "react";
import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(5);
  const [remove, setRemove] = useState(counter);
  const addValue = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const removeValue = () => {
    setRemove(remove - 1);
    console.log(remove);
  };
  return (
    <>
      <div>
        <h4>Adding Value: {counter}</h4>
        <button className="bg-red-500 p-2 rounded ml-1" onClick={addValue}>
          Add value
        </button>
        <h5>Decresing Value: {remove}</h5>
        <button className="bg-red-500 p-2 rounded ml-1" onClick={removeValue}>
          Remove value
        </button>
      </div>
    </>
  );
}
export default Counter;
// yha hooks ka concept aata he, react ui changes me control krta he hooks k through.
// ui updation ko react control krta he.
