import React from "react";
import { useState } from "react";
function Checkbox() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.checked]);
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  };
  return (
    <>
      <div className="border border-top p-2">
        checkbox component
        <form action="#">
          <input type="checkbox" onChange={handleSkills} id="php" value="php" />{" "}
          &nbsp;
          <label htmlFor="php">php</label> <br />
          <input
            type="checkbox"
            onChange={handleSkills}
            id="java"
            value="java"
          />{" "}
          &nbsp;
          <label htmlFor="java">java</label>
          <h5>{skills}</h5>
        </form>
      </div>
    </>
  );
}
export default Checkbox;
