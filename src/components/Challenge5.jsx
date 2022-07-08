import React from "react";

const peopleList = [
  { name: "Terence", DOB: "1993-04-25", nationality: "China" },
  { name: "Jade", DOB: "1998-12-08", nationality: "Indonisia" },
];

const tableHeader = ["name", "DOB", "nationality"];

const Challenge5 = () => {
  return (
    <table>
      <thead>
        <tr>
          {tableHeader.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default Challenge5;
