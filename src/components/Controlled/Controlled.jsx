import React from "react";
import { useState } from "react";
function Controlled() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="border border-top p-2">
        Controlled component
        <form action="#">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border"
            placeholder="Enter Name"
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border"
            placeholder="Enter Password"
          />
          <br />
          <input type="submit" className="border" />
          <button className="bg-red-500 text-white" onClick={() => setName("")}>
            name clear
          </button>{" "}
          <br />
          <button
            className="bg-red-500 text-white"
            onClick={() => setPassword("")}
          >
            password clear
          </button>
          <ul className="list-unstyled">
            <li>{name}</li>
            <li>{password}</li>
          </ul>
        </form>
      </div>
    </>
  );
}
export default Controlled;

// controlled component is a form whose input field values is
// controlled by react's state.
