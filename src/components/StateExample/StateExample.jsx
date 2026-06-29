import React from "react";
import { useState } from "react";
function StateExample() {
  const [name, setName] = useState("jitendra");
  const handleFruit = () => {
    setName("Pandey");
  };
  return (
    <>
      <div className="border border-top p-2">
        State Example
        <button className="bg-red-500 text-white" onClick={handleFruit}>
          click to see the change name
        </button>
        <p>Change the name here and it is "{name}"</p>
      </div>
    </>
  );
}
export default StateExample;
// React me value tabhi change hoti he jab component re-render hoga.
// or hum re-render state k through krate he.
// state is like container to store data or variable.
// in react, state is mutable and dynamic.
// const[state, updateState] = useState("initial value");
