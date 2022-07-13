import React, { useState, useEffect } from "react";
import Table from "./Table";
import dayjs from "dayjs";

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

const getPeopleListWithAge = (peopleList: typeof initialPeopleList) => {
  const today = dayjs();
  return peopleList.map((person) => {
    const personAge = today.diff(person.dob, "year");
    return { ...person, age: personAge };
  });
};

const Challenge5 = () => {
  const [duplicate, setDuplicate] = useState(false);
  const [peopleList, setPeopleList] = useState(initialPeopleList);
  const [duplicatedPeopleList, setDuplicatedPeopleList] =
    useState(initialPeopleList);
  const [averageAge, setAverageAge] = useState<number>();

  const handleDuplicate = () => {
    setDuplicate(true);
    const copy = JSON.parse(JSON.stringify(peopleList));
    setDuplicatedPeopleList(copy);
  };

  const handleRemove = () => {
    setDuplicate(false);
  };

  useEffect(() => {
    const PeopleListWithAge = getPeopleListWithAge(peopleList);
    const ageArr = PeopleListWithAge.map((person) => person.age);
    setAverageAge(ageArr.reduce((a, b) => a + b, 0)/ageArr.length);
  }, [peopleList]);

  return (
    <div>
      <Table
        columnHeaderList={columnHeader}
        rowList={peopleList}
        editable
        onChange={(value) => setPeopleList(value)}
      />
      <div>Average age: {averageAge}</div>
      <div>
        People with age less than <input style={{ width: "15px" }} />:{" "}
      </div>
      <div>Country list: </div>
      <button onClick={handleDuplicate}>Duplicate</button>
      <button onClick={handleRemove}>Remove</button>
      {duplicate && (
        <Table columnHeaderList={columnHeader} rowList={duplicatedPeopleList} />
      )}
    </div>
  );
};

export default Challenge5;
