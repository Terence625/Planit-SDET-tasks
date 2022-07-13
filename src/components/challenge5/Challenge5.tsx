import React, { useState } from "react";
import Table from "./Table";

const initialPeopleList = [
  { name: "Terence", dob: "1993-04-25", nationality: "China" },
  { name: "Jade", dob: "1998-12-08", nationality: "Indonesia" },
];
const columnHeader: {
  key: "name" | "dob" | "nationality";
  label: string;
}[] = [
  { key: "name", label: "Name" },
  { key: "dob", label: "Date of Birthday" },
  { key: "nationality", label: "Nationality" },
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
        columnHeaderList={columnHeader}
        rowList={peopleList}
        editable
        onChange={(value) => setPeopleList(value)}
      />
      <button onClick={handleDuplicate}>Duplicate</button>
      <button onClick={handleRemove}>Remove</button>
      {duplicate && (
        <Table columnHeaderList={columnHeader} rowList={duplicatedPeopleList} />
      )}
    </div>
  );
};

export default Challenge5;
