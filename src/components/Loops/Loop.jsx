import React from "react";
function Loop() {
  const userData = [
    {
      name: "ram",
      place: "indore",
      id: 1,
    },
    {
      name: "shyam",
      place: "delhi",
      id: 2,
    },
    {
      name: "pandey",
      place: "mumbai",
      id: 3,
    },
  ];

  return (
    <>
      <div className="border border-2 p-2">
        Loop example
        <ul className="list-unstyled">
          {userData.map((item) => (
            <li key={item.id}>
              Name: {item.name} | Place: {item.place} | ID: {item.id}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Loop;

// array is collection of data.
