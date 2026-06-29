import React from "react";
import { useState } from "react";
function Toggle() {
  const [display, setDisplay] = useState("User Found");
  return (
    <>
      <div className="border border-top p-2">
        Toggle Example
        {display ? <h5>User Found</h5> : null}
        <button
          className="bg-blue-500 text-white"
          onClick={() => setDisplay(!display)}
        >
          Toggle
        </button>
      </div>
    </>
  );
}
export default Toggle;

// Toggle karna ya hide or show krna ek hi bat h.
