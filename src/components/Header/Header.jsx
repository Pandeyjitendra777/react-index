import React from "react";
import "./Header.css";
function Header() {
  return (
    <>
      <div>
        <div className="navbar bg-black p-4">
          <ul className="flex justify-end">
            <li className="mr-5">
              <a className="text-white no-underline" href="#">
                Home
              </a>
            </li>
            <li className="mr-5">
              <a className="text-white no-underline" href="#">
                About
              </a>
            </li>
            <li className="mr-5">
              <a className="text-white no-underline" href="#">
                Contact
              </a>
            </li>
            <li className="mr-5">
              <a className="text-white no-underline" href="#">
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Header;

/*NOTE: COMPONENT NAME SHOULD STARTS WITH CAPITAL LETTER BCZ REACT SHOULD IDENTIFY
 BETWEEN COMPONENT NAME AND HTML TAGS (COZ HTML TAGS ARE DEFINED WITH SMALL LETTERS). */

// WHAT IS COMPONENT: in react, component is a piece of code that can be reusable.
// You can use the same component multiple times across your app.

// why need to import and export to component:
