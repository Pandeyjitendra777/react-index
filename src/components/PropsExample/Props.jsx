import React from "react";
function Props(props) {
  return (
    <>
      <div className="border border-top p-2">
        <ul className="list-unstyled">
          <li>Name is : {props.user.name}</li>
          <li>Age is : {props.user.age}</li>
          <li>Email is : {props.user.email}</li>
        </ul>
      </div>
    </>
  );
}
export default Props;

// props are like properties.
// kuch values jo parent se child component me send krte h through props.
// here mene dynamic data fetch kra h parent component se jo ki app.jsx he.
