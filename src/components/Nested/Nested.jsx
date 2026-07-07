import React from "react";
import { useState } from "react";
function Nested() {
  const collegeData = [
    {
      city: "Indore",
      id: 1,
      student: [
        {
          name: "Ram",
          marks: 100,
        },
        {
          name: "shyam",
          marks: 200,
        },
      ],
    },
    {
      city: "Bhopal",
      id: 2,
    },
    {
      city: "Dewas",
      id: 3,
    },
    {
      city: "Ujjain",
      id: 4,
    },
  ];
  return (
    <>
      <div className="border border-2 p-2">
        Nested Looping
        {collegeData.map((college, index) => (
          <div>
            <h5 key={index}>{college.city}</h5>
            <ul>
              {college.student?.map((student, index) => (
                <li key={index}>
                  {student.name} - {student.marks}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
export default Nested;
