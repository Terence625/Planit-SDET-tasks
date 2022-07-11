import React, { useState } from "react";

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
  const [cellEditable, setCellEditable] = useState(
    Array.from({ length: peopleList.length }, () => ({
      name: false,
      DOB: false,
      nationality: false,
    }))
  );

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

  const handleDoubleClick = (index: number, key: string) => {
    setCellEditable(
      cellEditable.map((cell, i) => {
        if (i === index) {
          cell[key as keyof Person] = true;
          return cell;
        }
        return cell;
      })
    );
  };

  const dataRows = peopleList.map((row, index) => {
    return (
      <tr key={index}>
        <td onDoubleClick={() => handleDoubleClick(index, "name")}>
          {cellEditable[index].name ? (
            <input
              value={row.name}
              onChange={(e) => handleChange(e, index, "name")}
            />
          ) : (
            row.name
          )}
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
