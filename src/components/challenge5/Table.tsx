import React, { useState } from "react";

interface Person {
  name: string;
  DOB: string;
  nationality: string;
}

interface ITableProps {
  peopleList: Person[];
  onCellDataChange?: (value: Person[]) => void;
}

const Table = ({ peopleList, onCellDataChange }: ITableProps) => {
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

  const setCellEditableFun = (index: number, key: string, boo: boolean) => {
    setCellEditable(
      cellEditable.map((cell, i) => {
        if (i === index) {
          cell[key as keyof Person] = boo;
          return cell;
        }
        return cell;
      })
    );
  };

  const handleDoubleClick = (index: number, key: string) => {
    setCellEditableFun(index, key, true);
  };

  const handleBlur = (index: number, key: string) => {
    setCellEditableFun(index, key, false);
  };

  const handleEnterKeyPress = (
    e: React.KeyboardEvent,
    index: number,
    key: string
  ) => {
    if (e.key === "Enter") setCellEditableFun(index, key, false);
  };

  const dataRows = peopleList.map((row, index) => {
    return (
      <tr key={index}>
        <td onDoubleClick={() => handleDoubleClick(index, "name")}>
          {cellEditable[index].name ? (
            <input
              value={row.name}
              onChange={(e) => handleChange(e, index, "name")}
              onBlur={() => handleBlur(index, "name")}
              onKeyDown={(e) => handleEnterKeyPress(e, index, "name")}
            />
          ) : (
            row.name
          )}
        </td>
        <td onDoubleClick={() => handleDoubleClick(index, "DOB")}>
          {cellEditable[index].DOB ? (
            <input
              value={row.DOB}
              onChange={(e) => handleChange(e, index, "DOB")}
              onBlur={() => handleBlur(index, "DOB")}
            />
          ) : (
            row.DOB
          )}
        </td>
        <td onDoubleClick={() => handleDoubleClick(index, "nationality")}>
          {cellEditable[index].nationality ? (
            <input
              value={row.nationality}
              onChange={(e) => handleChange(e, index, "nationality")}
              onBlur={() => handleBlur(index, "nationality")}
            />
          ) : (
            row.nationality
          )}
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

export default Table;
