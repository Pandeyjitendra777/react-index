import React from "react";
import { useState } from "react";
function GetInput() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="border border-top p-2">
        <h5>Get input value: {value}</h5>
        <input
          className="border border-1 p-2"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Enter user name"
        />{" "}
        <br />
        <button className="bg-red-500 text-white" onClick={() => setValue("")}>
          Clear value
        </button>
      </div>
    </>
  );
}
export default GetInput;
