import React from "react";
import { useState } from "react";
function Radio() {
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("Indore");
  return (
    <>
      <div className="border border-1 p-2">
        <h3>Selected gender: {}</h3>
        <input
          type="radio"
          onChange={(event) => setGender(event.target.value)}
          value={"male"}
          checked={gender === "male"}
          name="gender"
          id="male"
        />
        <label htmlFor="male">Male</label>
        <br />
        <input
          type="radio"
          onChange={(event) => setGender(event.target.value)}
          value={"female"}
          checked={gender === "female"}
          name="gender"
          id="female"
        />
        <label htmlFor="female">Female</label>
        <h5>Selected: {gender}</h5>
        <br />
        <h4>select city</h4>
        <select
          name=""
          onChange={(event) => setCity(event.target.value)}
          id="city"
          defaultValue={"Indore"}
        >
          <option value="noida">Noida</option>
          <option value="indore">Indore</option>
          <option value="ujjain">Ujjain</option>
        </select>
        <p>selected city is: {city}</p>
      </div>
    </>
  );
}
export default Radio;
// radio button ek select ho iske liye sab input me name same hona chaiye.
