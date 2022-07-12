import React, { useState } from "react";

interface ITableProps<RowType, Key> {
  columnHeader: {
    key: Key;
    label: string;
  }[];
  rowList: RowType[];
  onCellDataChange?: (value: RowType[]) => void;
}

const Table = <
  RowType extends { [P in Key]: string },
  Key extends keyof RowType
>({
  columnHeader,
  rowList,
  onCellDataChange,
}: ITableProps<RowType, Key>) => {
  const [cellEditable, setCellEditable] = useState(
    Array.from(rowList, (row) =>
      Object.keys(row).reduce((acc, key) => {
        return { ...acc, [key]: false };
      }, {})
    )
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    key: Key
  ) => {
    onCellDataChange?.(
      rowList.map((row, i) => {
        if (i === index) {
          return { ...row, [key]: e.target.value };
        }
        return row;
      })
    );
  };

  const setCellEditableFun = (index: number, key: Key, boo: boolean) => {
    setCellEditable(
      cellEditable.map((cell, i) => {
        if (i === index) {
          return { ...cell, [key]: boo };
        }
        return cell;
      })
    );
  };

  const dataCells = (index: number, key: Key, value: string) => {
    return (
      <td
        key={String(key)}
        onDoubleClick={() => setCellEditableFun(index, key, true)}
      >
        {(cellEditable[index] as Record<Key, string>)[key] ? (
          <input
            autoFocus
            value={value}
            onChange={(e) => handleChange(e, index, key)}
            onBlur={() => setCellEditableFun(index, key, false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setCellEditableFun(index, key, false);
            }}
          />
        ) : (
          value
        )}
      </td>
    );
  };

  const columnHeaders = columnHeader.map((header) => (
    <th key={String(header.key)}>{header.label}</th>
  ));

  const dataRows = rowList.map((row, index) => {
    return (
      <tr key={String(index)}>
        {(Object.entries(row) as [Key,string][]).map(([key, value]) =>
          dataCells(index, key, value)
        )}
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>{columnHeaders}</tr>
      </thead>
      <tbody>{dataRows}</tbody>
    </table>
  );
};

export default Table;
