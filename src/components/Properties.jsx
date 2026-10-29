import React from "react";
function Properties(props) {
  return (
    <>
      <div>
        <h5 className="bg-green-400 w-50 my-2 p-2">
          Props Concept: {props.userName}
        </h5>
      </div>
    </>
  );
}
export default Properties;
