import React from "react";

interface Person {
  name: string;
  DOB: string;
  nationality: string;
}

interface IOriginalTableProps {
  peopleList: Person[];
  onCellDataChange?: (value: Person[]) => void;
}

const OriginalTable = ({
  peopleList,
  onCellDataChange,
}: IOriginalTableProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    key: string
  ) => {
    onCellDataChange?.(
      peopleList.map((person, i) => {
        if (i === index) {
          person[key as keyof Person] = e.target.value;
          return person;
        }
        return person;
      })
    );
  };

  const dataRows = peopleList.map((row, index) => {
    return (
      <tr key={index}>
        <td>
          <input
            value={row.name}
            onChange={(e) => handleChange(e, index, "name")}
          />
        </td>
        <td>
          <input
            value={row.DOB}
            onChange={(e) => handleChange(e, index, "DOB")}
          />
        </td>
        <td>
          <input
            value={row.nationality}
            onChange={(e) => handleChange(e, index, "nationality")}
          />
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>DOB</th>
          <th>nationality</th>
        </tr>
      </thead>
      <tbody>{dataRows}</tbody>
    </table>
  );
};

export default OriginalTable;
