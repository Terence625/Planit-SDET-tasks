import React, { useEffect, useState } from "react";
import OriginalTable from "./OriginalTable";

const Challenge5 = () => {
  const [duplicate, setDuplicate] = useState(false);
  const [peopleList, setPeopleList] = useState([
    { name: "Terence", DOB: "1993-04-25", nationality: "China" },
    { name: "Jade", DOB: "1998-12-08", nationality: "Indonisia" },
  ]);

  const handleDuplicate = () => {
    setDuplicate(true);
  };

  const handleRemove = () => {
    setDuplicate(false);
  };

  return (
    <div>
      <OriginalTable
        peopleList={peopleList}
        onCellDataChange={(value) => setPeopleList(value)}
      />
      <button onClick={handleDuplicate}>Duplicate</button>
      <button onClick={handleRemove}>Remove</button>
      {duplicate && <OriginalTable peopleList={peopleList} />}
    </div>
  );
};

export default Challenge5;
