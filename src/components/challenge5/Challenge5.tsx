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

const arrRemoveDuplicate = <T extends number | string>(
  arr: Array<T>
): Array<T> => {
  let obj: Partial<Record<T, boolean>> = {};
  return arr.filter((item) => {
    return obj.hasOwnProperty(item) ? false : (obj[item] = true);
  });
};

const Challenge5 = () => {
  const [duplicate, setDuplicate] = useState(false);
  const [peopleList, setPeopleList] = useState(initialPeopleList);
  const [duplicatedPeopleList, setDuplicatedPeopleList] =
    useState(initialPeopleList);
  const [ageThreshold, setAgeThreshold] = useState<number>();

  const handleDuplicate = () => {
    setDuplicate(true);
    const copy = JSON.parse(JSON.stringify(peopleList));
    setDuplicatedPeopleList(copy);
  };

  const handleRemove = () => {
    setDuplicate(false);
  };
  const peopleListWithAge = getPeopleListWithAge(peopleList);
  const ageArr = peopleListWithAge.map((person) => person.age);
  const averageAge = ageArr.reduce((a, b) => a + b, 0) / ageArr.length;
  const countryArrString = arrRemoveDuplicate(
    peopleList.map((person) => person.nationality)
  )
    .reduce((prevCountry, country) => prevCountry + country + ", ", "")
    .slice(0, -2);
  const peopleLessThanAgeThresold = peopleListWithAge
    .filter((person) => (ageThreshold ? person.age < ageThreshold : false))
    .map((person) => person.name)
    .reduce((prevName, Name) => prevName + Name + ", ", "")
    .slice(0, -2);

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
        People with age less than{" "}
        <input
          onChange={(e) => setAgeThreshold(Number(e.target.value))}
          style={{ width: "15px" }}
        />
        : {peopleLessThanAgeThresold}
      </div>
      <div>Country list: {countryArrString}</div>
      <button onClick={handleDuplicate}>Duplicate</button>
      <button onClick={handleRemove}>Remove</button>
      {duplicate && (
        <Table columnHeaderList={columnHeader} rowList={duplicatedPeopleList} />
      )}
    </div>
  );
};

export default Challenge5;
