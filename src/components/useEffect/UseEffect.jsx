import React from "react";
import { useEffect, useState } from "react";
function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  function callsOnce() {
    console.log("called callsOnce");
  }

  useEffect(() => {
    callsOnce();
  }, [counter]);

  //   Note: useEffect me 2 parameter pass krte he, first function and second blank array means single bar call hoga.

  //   Note: yaha hum chah rhe ki useEffect me ye function call ho jab counter wali hi state update ho.
  //  to ese specific operation k liye hum is hook ka use karte he.

  return (
    <>
      <div className="border border-2 p-2">
        <h2>useEffect example</h2>
        <button
          onClick={() => setCounter(counter + 1)}
          className="bg-red-500 text-white p-2"
        >
          counter: {counter}
        </button>
        <button
          onClick={() => setData(data + 1)}
          className="bg-blue-500 text-white p-2"
        >
          data: {data}
        </button>
      </div>
    </>
  );
}
export default UseEffect;

// can use as life cycel method.
// to use fetch data.
// sidee effect jo component me h use rokne k liye is hook ka use karte he.
/* useEffect me wo specific function ya jo operation karna h wo hum 
rkh denge to wo ek hi baar call hoga even component re-render hoga jab bhi. */
// extra calling jo component me h use rokne k liye hum useeffect use karte he.
