import React, { useState } from "react";
import Table from "./Table";

const initialPeopleList = [
  { name: "Terence", DOB: "1993-04-25", nationality: "China" },
  { name: "Jade", DOB: "1998-12-08", nationality: "Indonesia" },
];

const Challenge5 = () => {
  const [duplicate, setDuplicate] = useState(false);
  const [peopleList, setPeopleList] = useState(initialPeopleList);
  const [duplicatedPeopleList, setDuplicatedPeopleList] =
    useState(initialPeopleList);

  const handleDuplicate = () => {
    setDuplicate(true);
    const copy = JSON.parse(JSON.stringify(peopleList));
    setDuplicatedPeopleList(copy);
  };

  const handleRemove = () => {
    setDuplicate(false);
  };

  return (
    <div>
      <Table
        columnHeader={[
          { key: "name", label: "Name" },
          { key: "DOB", label: "Date of Birth" },
          { key: "nationality", label: "Nationality" },
        ]}
        rowList={peopleList}
        onChange={(value) => setPeopleList(value)}
      />
      <button onClick={handleDuplicate}>Duplicate</button>
      <button onClick={handleRemove}>Remove</button>
      {duplicate && (
        <Table
          columnHeader={[
            { key: "name", label: "Name" },
            { key: "DOB", label: "Date of Birth" },
            { key: "nationality", label: "Nationality" },
          ]}
          rowList={duplicatedPeopleList}
        />
      )}
    </div>
  );
};

export default Challenge5;
