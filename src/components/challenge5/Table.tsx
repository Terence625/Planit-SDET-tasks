import React, { useState } from "react";
import "./Table.css";

const setArrayObjAllProperty = <T, K extends string, V>(
  arrObj: Record<K, V>[],
  value: T
): Record<string, T>[] => {
  return Array.from(arrObj, (row) =>
    Object.keys(arrObj).reduce((acc, key) => {
      return { ...acc, [key]: value };
    }, {})
  );
};

interface ITableProps<RowType, Key> {
  columnHeader: {
    key: Key;
    label: string;
  }[];
  rowList: RowType[];
  onChange?: (value: RowType[]) => void;
}

const Table = <
  RowType extends { [P in Key]: string },
  Key extends keyof RowType
>({
  columnHeader,
  rowList,
  onChange,
}: ITableProps<RowType, Key>) => {
  const initialCellEditable = setArrayObjAllProperty(rowList, false);
  const [cellEditable, setCellEditable] = useState(initialCellEditable);

  const handleCellChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    key: Key
  ) => {
    onChange?.(
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

  const handleAddNewLine = () => {
    const newRowList = [
      ...rowList,
      Object.keys(rowList[0]).reduce((acc, key) => {
        return { ...acc, [key]: "" };
      }, {}) as RowType,
    ];
    onChange?.(newRowList);
    setCellEditable(setArrayObjAllProperty(newRowList, false));
  };

  const handleDeleteRows = () => {};

  const dataCells = (index: number, key: Key, value: string) => {
    return (
      <td
        key={String(key)}
        onDoubleClick={() => setCellEditableFun(index, key, true)}
      >
        {(cellEditable[index] as Record<Key, boolean>)[key] ? (
          <div className="inputCell">
            <input
              autoFocus
              value={value}
              onChange={(e) => handleCellChange(e, index, key)}
              onBlur={() => setCellEditableFun(index, key, false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setCellEditableFun(index, key, false);
              }}
            />
          </div>
        ) : (
          <div className="dataCell">{value}</div>
        )}
      </td>
    );
  };

  const columnHeaders = columnHeader.map((header) => (
    <th key={String(header.key)}>
      {header.label}
    </th>
  ));

  const dataRows = rowList.map((row, index) => {
    return (
      <tr key={String(index)}>
        <td>
          <input type="checkbox" id={String(index)} />
        </td>
        {(Object.entries(row) as [Key, string][]).map(([key, value]) =>
          dataCells(index, key, value)
        )}
      </tr>
    );
  });

  return (
    <div className="Table">
      <button onClick={handleAddNewLine}>Add</button>
      <button onClick={handleDeleteRows}>Delete</button>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            {columnHeaders}
          </tr>
        </thead>
        <tbody>{dataRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
